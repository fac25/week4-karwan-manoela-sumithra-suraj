BEGIN;

INSERT INTO users VALUES
(1, 'Karwan', 'k@hotmail.com', '$2a$12$A74tKw96m82AEZpJrIEQxecZGscKayJA', DATE('now')),
(2, 'Manoela', 'm@hotmail.com', '$2a$12$A74tKw96m82AEZpJrIEQxecZGscKayJB', DATE('now')),
(3, 'Sumithra', 's@hotmail.com', '$2a$12$A74tKw96m82AEZpJrIEQxecZGscKayJC', DATE('now')),
(4, 'Suraj', 'ss@hotmail.com', '$2a$12$A74tKw96m82AEZpJrIEQxecZGscKayJD', DATE('now'))
ON CONFLICT DO NOTHING;

INSERT INTO howdies VALUES 
(1, 'How to fix bike', 'Go to Halfords', '../images/fixbike.jpg', 1, '2022-10-12'),
(2, 'How to sew a button', 'Use needle & thread', '../images/sewbutton.jpg', 3, '2022-10-11')
ON CONFLICT DO NOTHING;

COMMIT;