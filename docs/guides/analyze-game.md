# Analyze Game

With game report, you can analyze a game and get annotations for each move. This is done using the evaluations provided by the chess engine of your choice and the reference database.

To analyze a game, first import it into En Croissant. Then, open the Analysis tab and click on the `Generate Report` button. This will open a dialog where you can choose the engine and various settings. Here's a quick overview of the options:

#### Reverse Analysis
This is the recommended default. Since most chess engines will be able to utilize information on positions previously analyzed, the most efficient analysis is done by starting from the end.

#### Annotate Novelties
The first position that isn't found on the reference database will have a comment added saying that it is a novelty.

## How are annotations chosen?

There's several metrics involved in choosing the annotations for each move:
- what was the Win% Loss?
- is it the only sound move?
- is it a sacrifice?

### Win% Loss

For each move, the probability of the current player winning is calculated based on data from real games. This formula is taken directly from [Lichess](https://lichess.org/page/accuracy).

`Win% = 50 + 50 * (2 / (1 + exp(-0.00368208 * centipawns)) - 1)`

### Only Sound Move

The engine will always be run with multipv 2 to check if the best move is also the only sound move (one that isn't a mistake).

### Sacrifice

This is checked using a very simple [Alpha-Beta](https://www.chessprogramming.org/Alpha-Beta) engine. If the evaluation for a move is worse than the previous position, it'll be considered a sacrifice.

### Annotations

With these metrics, the following annotations are chosen:

| Annotation | Requirements |
| --- | --- |
| <span style="color: #0d8599">**Brilliant (!!)**</span> | sacrifice that is the only sound move |
| <span style="color: #0d9268">**Good (!)**</span> | only sound move that punishes an opponent's mistake |
| <span style="color: #66a80d">**Interesting (!?)**</span> | sacrifice that isn't the only sound move |
| <span style="color: #f08c00">**Dubious (?!)**</span> | 5..10 win% loss |
| <span style="color: #e8580d">**Mistake (?)**</span> | 10..20 win% loss |
| <span style="color: #e03232">**Blunder (??)**</span> | 20..100 win% loss |
