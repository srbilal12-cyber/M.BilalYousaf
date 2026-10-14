# Java Voting System (Academic Demo)

A Java Swing desktop prototype for practicing GUI programming, input validation, collections, file handling, and simple result visualization.

## Run on Windows

1. Install a **JDK 8 or newer** (not just a JRE): https://adoptium.net/
2. Download this repository or open the `projects` folder.
3. Double-click **`run-voting-system.bat`**.
4. Enter a voter name and a 13-digit test CNIC, choose a party, and press **CAST VOTE**.
5. Click **VIEW RESULTS** and enter the demo admin password: `demo-only-change-me`.

If the app does not open, open Command Prompt in this folder and run:

```bat
javac -encoding UTF-8 VotingMachine.java
java -Dvote.admin.password=demo-only-change-me VotingMachine
```

## Features

- Desktop ballot form with party selection
- Basic name and 13-digit CNIC format validation
- Duplicate-entry checks using a SHA-256 hash of the entered CNIC
- Local vote storage in `votes.tsv` (stores the hash and selected party, not the name or raw CNIC)
- Password-gated results with vote counts, percentages, tie/no-vote handling, and a bar chart

The app creates `votes.tsv` in the `projects` folder when run from the launcher. Delete that file to reset the local demo votes.

## Important limitations

This is a learning project, not an official election platform. It is not connected to the Election Commission of Pakistan (ECP), does not perform biometric verification, and is not designed for real elections. Hashing a CNIC does not make this prototype production-secure; the file format, local authentication, and vote-recording design would need substantial security review before real-world use.
