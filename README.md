# 🌍 geo-leaderboard

`ITA`
Progetto sperimentale didattico e senza fini di lucro per testare l'efficacia di un sistema di progressione ludico ispirato ai "season pass" nel contesto scolastico.

`ENG`
Experimental educational project without profit purposes to test the effectiveness of a ludic progression system inspired by "season pass" in the school context.

## Built with

- **[Nuxt 3](https://nuxt.com/)** as the main framework
- **[Typescript](https://www.typescriptlang.org/)** for the backend API
- **[vanilla CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)** for the frontend styling
- **[Appwrite Cloud](https://appwrite.io/)** for the database and authentication

the `Bangers` font is provided by [Google Fonts](https://fonts.google.com/specimen/Bangers).

## Local development

1. Login to Appwrite Cloud and create a new project with a database and collections. You can refer to the `/api` files to see the structure of the collections.

2. Clone the repository and navigate to the project directory

```bash
git clone https://github.com/moebiusmania/geo-leaderboard.git
cd geo-leaderboard
```

3. Install dependencies

```bash
npm ci
```

4. Copy `.env.example` to `.env` and set the Appwrite IDs

5. Run the development server

```bash
npm run dev
```

6. Open the browser and navigate to `http://localhost:3000`

## License

Released under the [MIT License](LICENSE).
