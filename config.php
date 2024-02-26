<?php

// ! connexion à la BDD
define('DSN', 'mysql:dbname=kevinlyphotos;host=kevinlyphotos.mysql.db');
define('USER', 'kevinlyphotos');
define('PASSWORD', '2HqwQq6As312hu1k');

// ! autres constantes
define('FORMAT_IMAGE', ["image/jpeg"]);
define('MAX_FILESIZE', 20 * 1024 * 1024); // 20 Mo


// ! nbe of pictures per pages

define('NB_ELEMENTS_PER_PAGE', 8);