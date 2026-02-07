---
layout: home

title: En Croissant - The Ultimate Chess Toolkit

hero:
  name: "En Croissant"
  text: "The Ultimate Chess Toolkit"
  tagline: An open-source, cross-platform chess GUI that aims to be powerful, customizable and easy to use.
  image:
    src: /large-logo.webp
    alt: EnCroissant
  actions:
    - theme: brand
      text: Download
      link: /download
    - theme: alt
      text: View on Github
      link: https://github.com/franciscoBSalgueiro/en-croissant

features:
  - title: Game Analysis
    icon: 📈
    details: Get a detailed analysis report of your games, including a graph of the evaluation over time, a heatmap of the board and a list of the best moves.
  - title: Personal database
    icon: 📁
    details: Do you play both in Lichess and Chess.com? With En Croissant, you can easily import your games from both platforms and keep them up to date in a single place.
  - title: Download manager
    icon: 📥
    details: En Croissant comes with a built-in download manager that allows you to get the latest engines and databases with a single click.
---

<figure :class="$style.showcase">
	<img src="/showcase.webp" alt="Board" width="1550" />
	<figcaption>
		En Croissant's analysis screen
	</figcaption>
</figure>

<style module>
.showcase {
  margin-top: 2rem;
  margin-left: auto;
  margin-right: auto;
  padding: 1.5rem;
  max-width: 80rem;
}

figcaption {
  font-size: 0.8em;
  text-align: center;
  margin-top: 1rem;
}
</style>
