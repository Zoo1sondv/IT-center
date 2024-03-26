### NODE USE 14.21.3

## FRONTEND

- b1: `npm install`
- b2: `npm start`

## BACKEND

# Build first

- b1: `copy .env.example .env`
- b2: `docker-compose up -d --build`
- b3: `docker-compose exec app sh`
- b4: `composer install`
- b6: `php artisan key:generate`
- b7: `php artisan migrate`
- b8: `php artisan passport:install`
- b9: `php artisan passport:keys`
- b10: `chmod -R 0777 storage`

# Build second

- b1: `docker-compose up -d`
- b2: `docker-compose exec app sh`
- b3: `composer update`
