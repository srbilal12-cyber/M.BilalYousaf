import java.awt.*;
import java.awt.event.*;
import java.io.*;
import java.nio.charset.StandardCharsets;
import java.nio.file.*;
import java.security.MessageDigest;
import java.util.*;
import javax.swing.*;
import javax.swing.border.EmptyBorder;

/** Student voting-system demo. Not an official election system. */
public class VotingMachine extends JFrame implements ActionListener {
    private final JTextField nameField = new JTextField();
    private final JTextField cnicField = new JTextField();
    private final JComboBox<String> partyBox =
            new JComboBox<>(new String[]{"PTI", "PMLN", "PPP", "JAAC"});
    private final JButton voteButton = new JButton("CAST VOTE");
    private final JButton resultsButton = new JButton("VIEW RESULTS");
    private final Set<String> votedIds = new HashSet<>();
    private final Path voteFile = Paths.get("votes.tsv");
    // Override for local testing: java -Dvote.admin.password=yourPassword VotingMachine
    private final String adminPassword =
            System.getProperty("vote.admin.password", "demo-only-change-me");

    public VotingMachine() {
        super("Student Voting System — Digital Ballot Demo");
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setSize(760, 500);
        setLocationRelativeTo(null);
        setMinimumSize(new Dimension(650, 450));

        JPanel root = new JPanel(new BorderLayout(18, 18));
        root.setBorder(new EmptyBorder(22, 26, 22, 26));
        root.setBackground(new Color(242, 247, 243));
        setContentPane(root);

        JLabel heading = new JLabel("DIGITAL BALLOT SYSTEM", SwingConstants.CENTER);
        heading.setOpaque(true);
        heading.setBackground(new Color(18, 91, 52));
        heading.setForeground(Color.WHITE);
        heading.setFont(new Font("Segoe UI", Font.BOLD, 22));
        heading.setBorder(new EmptyBorder(18, 10, 18, 10));
        root.add(heading, BorderLayout.NORTH);

        JPanel form = new JPanel(new GridBagLayout());
        form.setBackground(Color.WHITE);
        form.setBorder(new EmptyBorder(24, 28, 24, 28));
        GridBagConstraints g = new GridBagConstraints();
        g.gridx = 0;
        g.fill = GridBagConstraints.HORIZONTAL;
        g.weightx = 1;
        g.insets = new Insets(7, 0, 7, 0);
        addField(form, g, 0, "Voter Name", nameField);
        addField(form, g, 2, "CNIC (13 digits)", cnicField);

        g.gridy = 4;
        form.add(new JLabel("Select Party"), g);
        g.gridy = 5;
        partyBox.setFont(new Font("Segoe UI", Font.PLAIN, 15));
        form.add(partyBox, g);

        JPanel buttons = new JPanel(new GridLayout(1, 2, 12, 0));
        buttons.setBackground(Color.WHITE);
        styleButton(voteButton, new Color(32, 135, 72));
        styleButton(resultsButton, new Color(57, 76, 91));
        voteButton.addActionListener(this);
        resultsButton.addActionListener(this);
        buttons.add(voteButton);
        buttons.add(resultsButton);
        g.gridy = 6;
        g.insets = new Insets(20, 0, 0, 0);
        form.add(buttons, g);

        JLabel note = new JLabel(
                "<html><center>Educational demo only — not connected to ECP or biometric services.</center></html>",
                SwingConstants.CENTER);
        note.setForeground(new Color(75, 95, 82));
        root.add(form, BorderLayout.CENTER);
        root.add(note, BorderLayout.SOUTH);
        loadVotedIds();
        setVisible(true);
    }

    private void addField(JPanel panel, GridBagConstraints g, int row,
                          String label, JTextField field) {
        g.gridy = row;
        panel.add(new JLabel(label), g);
        g.gridy = row + 1;
        field.setFont(new Font("Segoe UI", Font.PLAIN, 15));
        field.setPreferredSize(new Dimension(300, 36));
        panel.add(field, g);
    }

    private void styleButton(JButton button, Color color) {
        button.setFont(new Font("Segoe UI", Font.BOLD, 13));
        button.setForeground(Color.WHITE);
        button.setBackground(color);
        button.setFocusPainted(false);
        button.setBorderPainted(false);
        button.setOpaque(true);
        button.setPreferredSize(new Dimension(150, 42));
    }

    private String hashCnic(String cnic) throws Exception {
        byte[] bytes = MessageDigest.getInstance("SHA-256")
                .digest(cnic.getBytes(StandardCharsets.UTF_8));
        StringBuilder result = new StringBuilder();
        for (byte b : bytes) result.append(String.format("%02x", b));
        return result.toString();
    }

    private void loadVotedIds() {
        if (!Files.exists(voteFile)) return;
        try (BufferedReader reader = Files.newBufferedReader(voteFile, StandardCharsets.UTF_8)) {
            String line;
            while ((line = reader.readLine()) != null) {
                String[] parts = line.split("\\t", -1);
                if (parts.length == 2) votedIds.add(parts[0]);
            }
        } catch (IOException ex) {
            showError("Could not read saved votes: " + ex.getMessage());
        }
    }

    private boolean saveVote(String hashedId, String party) {
        try (BufferedWriter writer = Files.newBufferedWriter(
                voteFile, StandardCharsets.UTF_8,
                StandardOpenOption.CREATE, StandardOpenOption.APPEND)) {
            writer.write(hashedId + "\\t" + party);
            writer.newLine();
            return true;
        } catch (IOException ex) {
            showError("Vote was not saved: " + ex.getMessage());
            return false;
        }
    }

    private void castVote() {
        String name = nameField.getText().trim();
        String cnic = cnicField.getText().trim();
        String party = (String) partyBox.getSelectedItem();
        if (name.isEmpty() || cnic.isEmpty()) {
            JOptionPane.showMessageDialog(this, "Please enter your name and CNIC.",
                    "Missing Details", JOptionPane.WARNING_MESSAGE);
            return;
        }
        if (!cnic.matches("\\d{13}")) {
            JOptionPane.showMessageDialog(this, "CNIC must contain exactly 13 digits.",
                    "Invalid CNIC", JOptionPane.ERROR_MESSAGE);
            return;
        }

        try {
            String hashedId = hashCnic(cnic);
            if (votedIds.contains(hashedId)) {
                JOptionPane.showMessageDialog(this, "This CNIC has already been used.",
                        "Duplicate Vote", JOptionPane.WARNING_MESSAGE);
                return;
            }
            int choice = JOptionPane.showConfirmDialog(this,
                    "Confirm your vote for " + party + "?", "Confirm Vote",
                    JOptionPane.YES_NO_OPTION);
            if (choice != JOptionPane.YES_OPTION) return;

            if (saveVote(hashedId, party)) {
                votedIds.add(hashedId);
                JOptionPane.showMessageDialog(this, "Vote saved successfully.",
                        "Success", JOptionPane.INFORMATION_MESSAGE);
                nameField.setText("");
                cnicField.setText("");
            }
        } catch (Exception ex) {
            showError("Could not process the vote: " + ex.getMessage());
        }
    }

    private boolean verifyAdmin() {
        JPasswordField passwordField = new JPasswordField();
        int choice = JOptionPane.showConfirmDialog(this, passwordField,
                "Enter Demo Admin Password", JOptionPane.OK_CANCEL_OPTION);
        return choice == JOptionPane.OK_OPTION
                && Arrays.equals(passwordField.getPassword(), adminPassword.toCharArray());
    }

    private Map<String, Integer> calculateVotes() {
        Map<String, Integer> counts = new LinkedHashMap<>();
        for (String party : Arrays.asList("PTI", "PMLN", "PPP", "JAAC")) counts.put(party, 0);
        if (!Files.exists(voteFile)) return counts;
        try (BufferedReader reader = Files.newBufferedReader(voteFile, StandardCharsets.UTF_8)) {
            String line;
            while ((line = reader.readLine()) != null) {
                String[] parts = line.split("\\t", -1);
                if (parts.length == 2 && counts.containsKey(parts[1])) {
                    counts.put(parts[1], counts.get(parts[1]) + 1);
                }
            }
        } catch (IOException ex) {
            showError("Could not calculate results: " + ex.getMessage());
        }
        return counts;
    }

    private void showResults() {
        Map<String, Integer> counts = calculateVotes();
        int total = counts.values().stream().mapToInt(Integer::intValue).sum();
        int max = counts.values().stream().mapToInt(Integer::intValue).max().orElse(0);
        long leaders = counts.values().stream().filter(v -> v == max).count();
        String winner = total == 0 ? "No votes yet" :
                (leaders > 1 ? "Tie" : counts.entrySet().stream()
                        .filter(entry -> entry.getValue() == max)
                        .map(Map.Entry::getKey).findFirst().orElse("No result"));

        StringBuilder report = new StringBuilder("VOTING SYSTEM RESULTS (DEMO)\n\n");
        for (Map.Entry<String, Integer> entry : counts.entrySet()) {
            int percent = total == 0 ? 0 :
                    (int) Math.round(entry.getValue() * 100.0 / total);
            report.append(String.format("%-8s %5d votes  (%d%%)%n",
                    entry.getKey(), entry.getValue(), percent));
        }
        report.append("\nTotal votes: ").append(total)
                .append("\nLeading result: ").append(winner)
                .append("\n\nEducational project only; not official election data.");

        JTextArea area = new JTextArea(report.toString(), 12, 32);
        area.setEditable(false);
        area.setFont(new Font("Monospaced", Font.PLAIN, 14));
        area.setBackground(new Color(20, 39, 30));
        area.setForeground(new Color(238, 247, 240));
        area.setBorder(new EmptyBorder(18, 18, 18, 18));

        JPanel chart = new JPanel() {
            @Override
            protected void paintComponent(Graphics graphics) {
                super.paintComponent(graphics);
                Graphics2D g2 = (Graphics2D) graphics.create();
                g2.setRenderingHint(RenderingHints.KEY_ANTIALIASING,
                        RenderingHints.VALUE_ANTIALIAS_ON);
                int baseY = getHeight() - 55;
                int maxValue = Math.max(1, counts.values().stream()
                        .mapToInt(Integer::intValue).max().orElse(0));
                int slot = Math.max(1, getWidth() / counts.size());
                int barWidth = Math.min(54, slot - 18);
                int index = 0;
                Color[] colors = {new Color(42, 145, 82), new Color(49, 111, 170),
                        new Color(194, 56, 61), new Color(205, 130, 43)};
                for (Map.Entry<String, Integer> entry : counts.entrySet()) {
                    int barHeight = (int) ((baseY - 50) *
                            entry.getValue() / (double) maxValue);
                    int x = index * slot + (slot - barWidth) / 2;
                    g2.setColor(colors[index]);
                    g2.fillRoundRect(x, baseY - barHeight, barWidth, barHeight, 8, 8);
                    g2.setColor(Color.DARK_GRAY);
                    g2.drawString(String.valueOf(entry.getValue()), x + 8, baseY - barHeight - 7);
                    g2.drawString(entry.getKey(), x, baseY + 22);
                    index++;
                }
                g2.dispose();
            }
        };
        chart.setPreferredSize(new Dimension(360, 330));
        chart.setBackground(Color.WHITE);

        JFrame resultsFrame = new JFrame("Results Dashboard — Demo");
        resultsFrame.setDefaultCloseOperation(JFrame.DISPOSE_ON_CLOSE);
        resultsFrame.setLayout(new GridLayout(1, 2, 10, 10));
        resultsFrame.add(new JScrollPane(area));
        resultsFrame.add(chart);
        resultsFrame.setSize(820, 440);
        resultsFrame.setLocationRelativeTo(this);
        resultsFrame.setVisible(true);
    }

    private void showError(String message) {
        JOptionPane.showMessageDialog(this, message, "System Error",
                JOptionPane.ERROR_MESSAGE);
    }

    @Override
    public void actionPerformed(ActionEvent event) {
        if (event.getSource() == voteButton) {
            castVote();
        } else if (event.getSource() == resultsButton) {
            if (verifyAdmin()) showResults();
            else JOptionPane.showMessageDialog(this, "Admin verification failed.",
                    "Access Denied", JOptionPane.ERROR_MESSAGE);
        }
    }

    public static void main(String[] args) {
        SwingUtilities.invokeLater(() -> {
            try {
                UIManager.setLookAndFeel(UIManager.getSystemLookAndFeelClassName());
            } catch (Exception ignored) {
                // Keep Swing's default look and feel if the system theme is unavailable.
            }
            new VotingMachine();
        });
    }
}
