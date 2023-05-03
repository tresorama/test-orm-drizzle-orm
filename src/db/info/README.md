# How to play

1. Launch DB Server
    - `npm run db:spin-up`
2. Connect to DB via GUI client:
    - Check `docker/docker-compose.md` for connection string.
    - Use a client:
      - Beekeeper Studio (Community Edition) - Recommended
      - Adminer (not included but you can use Docker to spin up it)
3. If your Database Schema is already in Sync with Drizzle ORM go to step 8
4. If your Database is already seeded go to step 9
5. Ensure the Drizzzle Schema Schema exists in `src/db/schema.ts` and is correct
6. Create SQL migrations file from schema
    - `npm run db:migrate:prepare`
7. Run the migration against the db
    - `npm run db:migrate:run`
8. Seed DB with data
    - `npm run db:seed`
9. You can now use Drizzle ORM or any SQL client to query the DB
    - query directly in Beekeeper Studio / Adminer
    - run playground code `npm run start`.