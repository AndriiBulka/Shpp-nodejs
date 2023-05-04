CREATE DATABASE IF NOT EXISTS books_library;
USE books_library;


CREATE TABLE IF NOT EXISTS authors
(
    id   INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) UNIQUE
);

INSERT INTO authors (name)
VALUES ('Андрей Богуславский'),
       ('Марк Саммерфильд'),
       ('М. Вильямс'),
       ('Уэс Маккинни'),
       ('Брюс Эккель'),
       ('Томас Кормен'),
       ('Чарльз Лейзерсон'),
       ('Рональд Ривест'),
       ('Клиффорд Штайн'),
       ('Дэвид Флэнаган'),
       ('Гэри Маклин Холл'),
       ('Джеймс Р. Грофф'),
       ('Люк Веллинг'),
       ('Сергей Мастицкий'),
       ('Джон Вудкок'),
       ('Джереми Блум'),
       ('А. Белов'),
       ('Сэмюэл Грингард'),
       ('Сет Гринберг'),
       ('Александр Сераков'),
       ('Тим Кедлек'),
       ('Пол Дейтел'),
       ('Харви Дейтел'),
       ('Роберт Мартин'),
       ('Энтони Грей'),
       ('Мартин Фаулер'),
       ('Прамодкумар Дж. Садаладж'),
       ('Джей Макгаврен'),
       ('Дрю Нейл');


CREATE TABLE IF NOT EXISTS `books_authors`

(
    `book_id`   INT NOT NULL,
    `author_id` INT NOT NULL,
    PRIMARY KEY (`book_id`, `author_id`),
    FOREIGN KEY (`book_id`) REFERENCES `books` (`id`) ON DELETE CASCADE ,
    FOREIGN KEY (`author_id`) REFERENCES `authors` (`id`)
);
INSERT INTO books_authors(book_id, author_id)
VALUES (1, 1),
       (2, 2),
       (3, 3),
       (4, 4),
       (5, 5),
       (6, 6),
       (6, 7),
       (6, 8),
       (6, 9),
       (7, 10),
       (8, 11),
       (9, 12),
       (10, 13),
       (11, 14),
       (12, 15),
       (13, 16),
       (14, 17),
       (15, 18),
       (16, 19),
       (17, 20),
       (18, 21),
       (19, 22),
       (19, 23),
       (20, 24),
       (21, 25),
       (22, 26),
       (22, 27),
       (23, 28),
       (24, 29);

ALTER TABLE books DROP COLUMN  author  ;