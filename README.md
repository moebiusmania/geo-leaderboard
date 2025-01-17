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

all of the images used in the project are generated by [Midjourney](https://www.midjourney.com/).

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

<!-- ## Roles

In Appwrite there are two "teams" of users that define the roles and permissions of the users:

- `admin`, who can create and manage the seasons
- `player`, who can setup their profile and answer the questions -->

## API reference

This application consume and expose the following APIs

| Endpoint                         | Methods | Description                            |
| -------------------------------- | ------- | -------------------------------------- |
| `/api/seasons`                   | GET     | Get all seasons                        |
| `/api/seasons/:number`           | GET     | Handle a specific season               |
| `/api/seasons/:number/rewards`   | GET     | Handle rewards for a specific season   |
| `/api/seasons/:number/homeworks` | GET     | Handle homeworks for a specific season |

## License

The code is released under the [MIT License](LICENSE).
