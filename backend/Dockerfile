FROM php:8.1.0-fpm

# Install system dependencies
RUN apt-get update && apt-get install -y libpq-dev

# Install PHP extensions
RUN docker-php-ext-install pdo_pgsql
RUN apt-get update && apt-get install -y \
    zlib1g-dev \
    libzip-dev
RUN docker-php-ext-install zip
# Get latest Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Set working directory
WORKDIR /var/www/app
