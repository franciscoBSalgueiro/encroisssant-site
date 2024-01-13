# Database format

Databases are stored in a single file, using [SQLite](https://www.sqlite.org/index.html). This is a very common general-purpose database format, and there are many tools available to work with it. This makes working with the database outside of En Croissant very easy, either programmatically or with existing SQLite tools like [DB Browser for SQLite](https://sqlitebrowser.org/).

## Schemas

The schema for the tables used in the database can be found [here](https://github.com/franciscoBSalgueiro/en-croissant/blob/master/src-tauri/src/db/create.sql).

## Move Encoding

Storing the moves in a human-readable format would take a lot of space, so they are encoded in a binary format.

Each move is encoded as a single byte, represeting the index of the move in the list of legal moves in the position. The move list is generated with [Shakmaty](https://github.com/niklasf/shakmaty) and then the encoded number is the index of the move in that list.