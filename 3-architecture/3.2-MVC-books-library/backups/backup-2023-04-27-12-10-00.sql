/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

# ------------------------------------------------------------
# SCHEMA DUMP FOR TABLE: authors
# ------------------------------------------------------------

CREATE TABLE IF NOT EXISTS `authors` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE = InnoDB AUTO_INCREMENT = 46 DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;

# ------------------------------------------------------------
# SCHEMA DUMP FOR TABLE: books
# ------------------------------------------------------------

CREATE TABLE IF NOT EXISTS `books` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `release_year` varchar(255) DEFAULT NULL,
  `pages` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `visits` int DEFAULT '0',
  `wanted` int DEFAULT '0',
  `deletion` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE = InnoDB AUTO_INCREMENT = 33 DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;

# ------------------------------------------------------------
# SCHEMA DUMP FOR TABLE: books_authors
# ------------------------------------------------------------

CREATE TABLE IF NOT EXISTS `books_authors` (
  `book_id` int NOT NULL,
  `author_id` int NOT NULL,
  PRIMARY KEY (`book_id`, `author_id`),
  KEY `author_id` (`author_id`),
  CONSTRAINT `books_authors_ibfk_1` FOREIGN KEY (`book_id`) REFERENCES `books` (`id`),
  CONSTRAINT `books_authors_ibfk_2` FOREIGN KEY (`author_id`) REFERENCES `authors` (`id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;

# ------------------------------------------------------------
# DATA DUMP FOR TABLE: authors
# ------------------------------------------------------------

INSERT INTO
  `authors` (`id`, `name`)
VALUES
  (17, 'А. Белов');
INSERT INTO
  `authors` (`id`, `name`)
VALUES
  (20, 'Александр Сераков');
INSERT INTO
  `authors` (`id`, `name`)
VALUES
  (1, 'Андрей Богуславский');
INSERT INTO
  `authors` (`id`, `name`)
VALUES
  (32, 'Б.Бакстон');
INSERT INTO
  `authors` (`id`, `name`)
VALUES
  (5, 'Брюс Эккель');
INSERT INTO
  `authors` (`id`, `name`)
VALUES
  (44, 'в');
INSERT INTO
  `authors` (`id`, `name`)
VALUES
  (11, 'Гэри Маклин Холл');
INSERT INTO
  `authors` (`id`, `name`)
VALUES
  (28, 'Джей Макгаврен');
INSERT INTO
  `authors` (`id`, `name`)
VALUES
  (12, 'Джеймс Р. Грофф');
INSERT INTO
  `authors` (`id`, `name`)
VALUES
  (16, 'Джереми Блум');
INSERT INTO
  `authors` (`id`, `name`)
VALUES
  (15, 'Джон Вудкок');
INSERT INTO
  `authors` (`id`, `name`)
VALUES
  (29, 'Дрю Нейл');
INSERT INTO
  `authors` (`id`, `name`)
VALUES
  (10, 'Дэвид Флэнаган');
INSERT INTO
  `authors` (`id`, `name`)
VALUES
  (45, 'й');
INSERT INTO
  `authors` (`id`, `name`)
VALUES
  (9, 'Клиффорд Штайн');
INSERT INTO
  `authors` (`id`, `name`)
VALUES
  (13, 'Люк Веллинг');
INSERT INTO
  `authors` (`id`, `name`)
VALUES
  (3, 'М. Вильямс');
INSERT INTO
  `authors` (`id`, `name`)
VALUES
  (2, 'Марк Саммерфильд');
INSERT INTO
  `authors` (`id`, `name`)
VALUES
  (26, 'Мартин Фаулер');
INSERT INTO
  `authors` (`id`, `name`)
VALUES
  (31, 'Н.Маркард');
INSERT INTO
  `authors` (`id`, `name`)
VALUES
  (22, 'Пол Дейтел');
INSERT INTO
  `authors` (`id`, `name`)
VALUES
  (27, 'Прамодкумар Дж. Садаладж');
INSERT INTO
  `authors` (`id`, `name`)
VALUES
  (24, 'Роберт Мартин');
INSERT INTO
  `authors` (`id`, `name`)
VALUES
  (8, 'Рональд Ривест');
INSERT INTO
  `authors` (`id`, `name`)
VALUES
  (14, 'Сергей Мастицкий');
INSERT INTO
  `authors` (`id`, `name`)
VALUES
  (19, 'Сет Гринберг');
INSERT INTO
  `authors` (`id`, `name`)
VALUES
  (18, 'Сэмюэл Грингард');
INSERT INTO
  `authors` (`id`, `name`)
VALUES
  (21, 'Тим Кедлек');
INSERT INTO
  `authors` (`id`, `name`)
VALUES
  (6, 'Томас Кормен');
INSERT INTO
  `authors` (`id`, `name`)
VALUES
  (4, 'Уэс Маккинни');
INSERT INTO
  `authors` (`id`, `name`)
VALUES
  (23, 'Харви Дейтел');
INSERT INTO
  `authors` (`id`, `name`)
VALUES
  (7, 'Чарльз Лейзерсон');
INSERT INTO
  `authors` (`id`, `name`)
VALUES
  (30, 'Ш.Карпендейл');
INSERT INTO
  `authors` (`id`, `name`)
VALUES
  (25, 'Энтони Грей');
INSERT INTO
  `authors` (`id`, `name`)
VALUES
  (43, 'я');

# ------------------------------------------------------------
# DATA DUMP FOR TABLE: books
# ------------------------------------------------------------

INSERT INTO
  `books` (
    `id`,
    `name`,
    `release_year`,
    `pages`,
    `description`,
    `image`,
    `visits`,
    `wanted`,
    `deletion`
  )
VALUES
  (
    1,
    'СИ++ И КОМПЬЮТЕРНАЯ ГРАФИКА',
    '2003',
    '351',
    'Лекции и практикум по программированию на Си++',
    '22.jpg',
    6,
    0,
    0
  );
INSERT INTO
  `books` (
    `id`,
    `name`,
    `release_year`,
    `pages`,
    `description`,
    `image`,
    `visits`,
    `wanted`,
    `deletion`
  )
VALUES
  (
    2,
    'Программирование на языке Go!',
    '2010',
    '290',
    'Лекции и практикум по программированию на Go!',
    '23.jpg',
    4,
    0,
    0
  );
INSERT INTO
  `books` (
    `id`,
    `name`,
    `release_year`,
    `pages`,
    `description`,
    `image`,
    `visits`,
    `wanted`,
    `deletion`
  )
VALUES
  (
    3,
    'Толковый словарь сетевых терминов и аббревиатур',
    '2007',
    '410',
    'Толковый словарь сетевых терминов и аббревиатур',
    '25.jpg',
    2,
    0,
    0
  );
INSERT INTO
  `books` (
    `id`,
    `name`,
    `release_year`,
    `pages`,
    `description`,
    `image`,
    `visits`,
    `wanted`,
    `deletion`
  )
VALUES
  (
    4,
    'Python for Data Analysis',
    '2011',
    '327',
    'Python for Data Analysis and so on',
    '26.jpg',
    0,
    0,
    0
  );
INSERT INTO
  `books` (
    `id`,
    `name`,
    `release_year`,
    `pages`,
    `description`,
    `image`,
    `visits`,
    `wanted`,
    `deletion`
  )
VALUES
  (
    5,
    'Thinking in Java (4th Edition)',
    '2000',
    '378',
    'Лекции и практикум по программированию на Java',
    '27.jpg',
    0,
    0,
    0
  );
INSERT INTO
  `books` (
    `id`,
    `name`,
    `release_year`,
    `pages`,
    `description`,
    `image`,
    `visits`,
    `wanted`,
    `deletion`
  )
VALUES
  (
    6,
    'Introduction to Algorithms',
    '2005',
    '315',
    'Книга для развития алгоритмического мышления',
    '29.jpg',
    0,
    0,
    0
  );
INSERT INTO
  `books` (
    `id`,
    `name`,
    `release_year`,
    `pages`,
    `description`,
    `image`,
    `visits`,
    `wanted`,
    `deletion`
  )
VALUES
  (
    7,
    'JavaScript Pocket Reference',
    '2012',
    '263',
    'Краткое руководство по JavaScript',
    '31.jpg',
    0,
    0,
    0
  );
INSERT INTO
  `books` (
    `id`,
    `name`,
    `release_year`,
    `pages`,
    `description`,
    `image`,
    `visits`,
    `wanted`,
    `deletion`
  )
VALUES
  (
    8,
    'Adaptive Code via C#: Class and Interface Design, Design Patterns, and SOLID Principles',
    '2006',
    '336',
    'Лекции и практикум по программированию на С#',
    '32.jpg',
    0,
    0,
    0
  );
INSERT INTO
  `books` (
    `id`,
    `name`,
    `release_year`,
    `pages`,
    `description`,
    `image`,
    `visits`,
    `wanted`,
    `deletion`
  )
VALUES
  (
    9,
    'SQL: The Complete Reference',
    '2009',
    '348',
    'Полное руководство по SQL',
    '33.jpg',
    0,
    0,
    0
  );
INSERT INTO
  `books` (
    `id`,
    `name`,
    `release_year`,
    `pages`,
    `description`,
    `image`,
    `visits`,
    `wanted`,
    `deletion`
  )
VALUES
  (
    10,
    'PHP and MySQL Web Development',
    '2011',
    '405',
    'Разработка при помощи PHP и SQL',
    '34.jpg',
    3,
    0,
    0
  );
INSERT INTO
  `books` (
    `id`,
    `name`,
    `release_year`,
    `pages`,
    `description`,
    `image`,
    `visits`,
    `wanted`,
    `deletion`
  )
VALUES
  (
    11,
    'Статистический анализ и визуализация данных с помощью R',
    '2013',
    '338',
    'Статистический анализ и визуализация данных с помощью R (что бы это ни было)',
    '35.jpg',
    0,
    0,
    0
  );
INSERT INTO
  `books` (
    `id`,
    `name`,
    `release_year`,
    `pages`,
    `description`,
    `image`,
    `visits`,
    `wanted`,
    `deletion`
  )
VALUES
  (
    12,
    'Computer Coding for Kid',
    '2015',
    '235',
    'Программирование для детей',
    '36.jpg',
    0,
    0,
    0
  );
INSERT INTO
  `books` (
    `id`,
    `name`,
    `release_year`,
    `pages`,
    `description`,
    `image`,
    `visits`,
    `wanted`,
    `deletion`
  )
VALUES
  (
    13,
    'Exploring Arduino: Tools and Techniques for Engineering Wizardry',
    '2017',
    '277',
    'Руководство по Arduino для начинающих',
    '34.jpg',
    1,
    0,
    0
  );
INSERT INTO
  `books` (
    `id`,
    `name`,
    `release_year`,
    `pages`,
    `description`,
    `image`,
    `visits`,
    `wanted`,
    `deletion`
  )
VALUES
  (
    14,
    'Программирование микроконтроллеров для начинающих и не только',
    '2014',
    '364',
    'Руководство по программированию микроконтроллеров',
    '38.jpg',
    0,
    0,
    0
  );
INSERT INTO
  `books` (
    `id`,
    `name`,
    `release_year`,
    `pages`,
    `description`,
    `image`,
    `visits`,
    `wanted`,
    `deletion`
  )
VALUES
  (
    15,
    'The Internet of Things',
    '2018',
    '249',
    'Что такое интернет и нафига он нужен',
    '39.jpg',
    0,
    0,
    0
  );
INSERT INTO
  `books` (
    `id`,
    `name`,
    `release_year`,
    `pages`,
    `description`,
    `image`,
    `visits`,
    `wanted`,
    `deletion`
  )
VALUES
  (
    16,
    'Sketching User Experiences: The Workbook',
    '2017',
    '268',
    'Вообще не понятно что это и для чего',
    '40.jpg',
    5,
    0,
    0
  );
INSERT INTO
  `books` (
    `id`,
    `name`,
    `release_year`,
    `pages`,
    `description`,
    `image`,
    `visits`,
    `wanted`,
    `deletion`
  )
VALUES
  (
    17,
    'InDesign CS6',
    '2013',
    '208',
    'Руководство пользователя InDesign',
    '41.jpg',
    0,
    0,
    0
  );
INSERT INTO
  `books` (
    `id`,
    `name`,
    `release_year`,
    `pages`,
    `description`,
    `image`,
    `visits`,
    `wanted`,
    `deletion`
  )
VALUES
  (
    18,
    'Адаптивный дизайн. Делаем сайты для любых устройств',
    '2015',
    '293',
    'Настольная книга фронтэндщика',
    '42.jpg',
    0,
    0,
    0
  );
INSERT INTO
  `books` (
    `id`,
    `name`,
    `release_year`,
    `pages`,
    `description`,
    `image`,
    `visits`,
    `wanted`,
    `deletion`
  )
VALUES
  (
    19,
    'Android для разработчиков',
    '2019',
    '315',
    'Разработка для устройств Android',
    '43.jpg',
    3,
    0,
    0
  );
INSERT INTO
  `books` (
    `id`,
    `name`,
    `release_year`,
    `pages`,
    `description`,
    `image`,
    `visits`,
    `wanted`,
    `deletion`
  )
VALUES
  (
    20,
    'Clean Code: A Handbook of Agile Software Craftsmanship',
    '2015',
    '339',
    'Как не писать говнокод',
    '44.jpg',
    4,
    0,
    0
  );
INSERT INTO
  `books` (
    `id`,
    `name`,
    `release_year`,
    `pages`,
    `description`,
    `image`,
    `visits`,
    `wanted`,
    `deletion`
  )
VALUES
  (
    21,
    'Swift Pocket Reference: Programming for iOS and OS X',
    '2020',
    '377',
    'Разработка для устройств на базе iOS and OS X',
    '45.jpg',
    0,
    0,
    0
  );
INSERT INTO
  `books` (
    `id`,
    `name`,
    `release_year`,
    `pages`,
    `description`,
    `image`,
    `visits`,
    `wanted`,
    `deletion`
  )
VALUES
  (
    22,
    'NoSQL Distilled: A Brief Guide to the Emerging World of Polyglot Persistence',
    '2009',
    '375',
    'Видимо что-то по SQL',
    '46.jpg',
    0,
    0,
    0
  );
INSERT INTO
  `books` (
    `id`,
    `name`,
    `release_year`,
    `pages`,
    `description`,
    `image`,
    `visits`,
    `wanted`,
    `deletion`
  )
VALUES
  (
    23,
    'Head First Ruby',
    '2019',
    '329',
    'Руководство по Ruby для чайников',
    '47.jpg',
    0,
    0,
    0
  );
INSERT INTO
  `books` (
    `id`,
    `name`,
    `release_year`,
    `pages`,
    `description`,
    `image`,
    `visits`,
    `wanted`,
    `deletion`
  )
VALUES
  (
    24,
    'Practical Vim',
    '2012',
    '267',
    'Вообще не понятно что это и для чего',
    '48.jpg',
    0,
    0,
    0
  );
INSERT INTO
  `books` (
    `id`,
    `name`,
    `release_year`,
    `pages`,
    `description`,
    `image`,
    `visits`,
    `wanted`,
    `deletion`
  )
VALUES
  (
    25,
    'Грохаєм Алгоритми',
    '2017',
    '23',
    '213',
    NULL,
    0,
    0,
    0
  );
INSERT INTO
  `books` (
    `id`,
    `name`,
    `release_year`,
    `pages`,
    `description`,
    `image`,
    `visits`,
    `wanted`,
    `deletion`
  )
VALUES
  (32, 'й', '', '', 'й', NULL, 0, 0, 1);

# ------------------------------------------------------------
# DATA DUMP FOR TABLE: books_authors
# ------------------------------------------------------------

INSERT INTO
  `books_authors` (`book_id`, `author_id`)
VALUES
  (1, 1);
INSERT INTO
  `books_authors` (`book_id`, `author_id`)
VALUES
  (2, 2);
INSERT INTO
  `books_authors` (`book_id`, `author_id`)
VALUES
  (3, 3);
INSERT INTO
  `books_authors` (`book_id`, `author_id`)
VALUES
  (4, 4);
INSERT INTO
  `books_authors` (`book_id`, `author_id`)
VALUES
  (5, 5);
INSERT INTO
  `books_authors` (`book_id`, `author_id`)
VALUES
  (6, 6);
INSERT INTO
  `books_authors` (`book_id`, `author_id`)
VALUES
  (6, 7);
INSERT INTO
  `books_authors` (`book_id`, `author_id`)
VALUES
  (6, 8);
INSERT INTO
  `books_authors` (`book_id`, `author_id`)
VALUES
  (6, 9);
INSERT INTO
  `books_authors` (`book_id`, `author_id`)
VALUES
  (7, 10);
INSERT INTO
  `books_authors` (`book_id`, `author_id`)
VALUES
  (8, 11);
INSERT INTO
  `books_authors` (`book_id`, `author_id`)
VALUES
  (9, 12);
INSERT INTO
  `books_authors` (`book_id`, `author_id`)
VALUES
  (10, 13);
INSERT INTO
  `books_authors` (`book_id`, `author_id`)
VALUES
  (11, 14);
INSERT INTO
  `books_authors` (`book_id`, `author_id`)
VALUES
  (12, 15);
INSERT INTO
  `books_authors` (`book_id`, `author_id`)
VALUES
  (13, 16);
INSERT INTO
  `books_authors` (`book_id`, `author_id`)
VALUES
  (14, 17);
INSERT INTO
  `books_authors` (`book_id`, `author_id`)
VALUES
  (15, 18);
INSERT INTO
  `books_authors` (`book_id`, `author_id`)
VALUES
  (16, 19);
INSERT INTO
  `books_authors` (`book_id`, `author_id`)
VALUES
  (17, 20);
INSERT INTO
  `books_authors` (`book_id`, `author_id`)
VALUES
  (18, 21);
INSERT INTO
  `books_authors` (`book_id`, `author_id`)
VALUES
  (19, 22);
INSERT INTO
  `books_authors` (`book_id`, `author_id`)
VALUES
  (19, 23);
INSERT INTO
  `books_authors` (`book_id`, `author_id`)
VALUES
  (20, 24);
INSERT INTO
  `books_authors` (`book_id`, `author_id`)
VALUES
  (21, 25);
INSERT INTO
  `books_authors` (`book_id`, `author_id`)
VALUES
  (22, 26);
INSERT INTO
  `books_authors` (`book_id`, `author_id`)
VALUES
  (22, 27);
INSERT INTO
  `books_authors` (`book_id`, `author_id`)
VALUES
  (23, 28);
INSERT INTO
  `books_authors` (`book_id`, `author_id`)
VALUES
  (24, 29);
INSERT INTO
  `books_authors` (`book_id`, `author_id`)
VALUES
  (16, 30);
INSERT INTO
  `books_authors` (`book_id`, `author_id`)
VALUES
  (16, 31);
INSERT INTO
  `books_authors` (`book_id`, `author_id`)
VALUES
  (16, 32);
INSERT INTO
  `books_authors` (`book_id`, `author_id`)
VALUES
  (32, 45);

/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
