# Java Voting System (Academic Demo)

A Java Swing desktop prototype for practicing GUI programming, input validation, collections, file handling, and simple result visualization.

## Features

- Desktop ballot form with party selection
- Basic name and 13-digit CNIC format validation
- Duplicate-entry checks using a SHA-256 hash of the entered CNIC
- Local vote storage in `votes.tsv` (stores the hash and selected party, not the name or raw CNIC)
- Password-gated result screen with vote counts, percentages, tie/no-vote handling, and a bar chart

## Run locally

Use JDK 8 or newer. Open a terminal in this folder:

```bash
javac VotingMachine.java
java -Dvote.admin.password=yourDemoPassword VotingMachine
```

If the system property is omitted, the demo password is `demo-only-change-me`. Change it when running the demo.

The app creates `votes.tsv` in the current working directory. Delete that file to reset the local demo votes.

## Important limitations

This is a learning project, not an official election platform. It is not connected to the Election Commission of Pakistan (ECP), does not perform biometric verification, and is not designed for real elections. Hashing a CNIC does not make this prototype production-secure; the file format, local authentication, and vote-recording design would need substantial security review before any real-world use.
