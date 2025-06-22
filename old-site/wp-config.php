<?php
define('WP_AUTO_UPDATE_CORE', 'minor');// This setting is required to make sure that WordPress updates can be properly managed in WordPress Toolkit. Remove this line if this WordPress website is not managed by WordPress Toolkit anymore.
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'sistrunk_wp698');

/** MySQL database username */
define('DB_USER', 'sistrunk_wp698');

/** MySQL database password */
define('DB_PASSWORD', 'P5WS1]3h(7');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '7kywu5yvsfqysraw0420mhes5zwngwl5njzjtjguquglygooi6ajdkt2938d0glx');
define('SECURE_AUTH_KEY',  'tedmttyftxywlafm2dedqcm4veq4vgt1kzzn5m3vldqafndm9wa92xdjcd0aznaj');
define('LOGGED_IN_KEY',    'sbswsegmei0gvzpoagjigqdokw5uydzsc0sl1kdapodaataezhqpjzz7agkvz0ra');
define('NONCE_KEY',        'zlqam3bojrqer06o4r0wmpu9p5c1ksrbx5oxyhnqlpavnn5ph3awvv0tafvyspqt');
define('AUTH_SALT',        'bx8zyzlcb0ymksotnwjvjpraoimrr1cpnlkcbjytar1ljx5tpx6zfezilkijaddm');
define('SECURE_AUTH_SALT', 'aoyla9zattbzxmkwrtkcocmr8buuapdprpew5py9cjwiif8ngzgh3in9enizi08v');
define('LOGGED_IN_SALT',   'vwtcnpyknz7yrd4wcghuxtvd160y1aextk62uj4jheprinjlxhgftp6dzbhgo2en');
define('NONCE_SALT',       'wjbi4o4acecj4eb46lrfjzj6caew45swamsqibtkslc3uus1pmorvimphwhl3qtg');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wpde_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
