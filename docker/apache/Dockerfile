FROM php:7.4-apache

# php.iniの追加
COPY php.ini /usr/local/etc/php/

# PHP拡張の有効化
RUN docker-php-source extract \
    && docker-php-ext-install pdo_mysql \
    && docker-php-ext-install mysqli \
    && docker-php-source delete
# xdebugの有効化
RUN pecl install xdebug \
    && docker-php-ext-enable xdebug
# PHP-GDの有効化
RUN apt-get update && apt-get install -y \
        libfreetype6-dev \
        libjpeg62-turbo-dev \
        libpng-dev \
    && docker-php-ext-configure gd --with-freetype --with-jpeg \
    && docker-php-ext-install -j$(nproc) gd
# PHP intl拡張の有効化
RUN apt update && apt install -y zlib1g-dev libicu-dev g++
RUN docker-php-ext-configure intl \
    && docker-php-ext-install intl

# mod_rewriteの有効化
RUN a2enmod rewrite

# Vimのインストール
RUN apt update && apt install -y vim

WORKDIR /webroot
