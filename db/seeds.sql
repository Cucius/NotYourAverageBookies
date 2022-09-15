
INSERT INTO Books (title, authorFirstName, authorLastName, genre, coverIMG)
VALUES
-- Biographies
('The Happiest Man on Earth','Eddie','Jaku', 'biography', LOAD_FILE('./public/images/biography/Happiest_Man.jpg') ),
("Can't Hurt Me: Master Your Mind and Defy the Odds",'David','Goggins', 'biography', LOAD_FILE('./public/images/biography/Cant_Hurt_Me.jpg') ),
('Revenge: Meghan, Harry and the War between the Windsors','Tom','Bower', 'biography', LOAD_FILE('./public/images/biography/Revenge.jpg') ),
('Rogues: True Stories of Grifters, Killers, Rebels and Crooks','Patrick Radden','Keefe', 'biography', LOAD_FILE('./public/images/biography/Rogues.jpg') ),
('Vanderbilt: The Rise and Fall of an American Dynasty','Anderson','Cooper', 'biography', LOAD_FILE('./public/images/biography/Vanderbilt.jpg') ),
-- Fantasy
('Circe','Madeline','Miller', 'fantasy', LOAD_FILE('./public/fantasy/biography/Circe.jpg') ),
('The Final Gambit','Jennifer Lynn','Barnes', 'fantasy', LOAD_FILE('./public/images/fantasy/Final_Gambit.jpg') ),
('The Measure','Nikki','Erlick', 'fantasy', LOAD_FILE('./public/images/fantasy/Measure.jpg') ),
('This Time Tomorrow','Emma','Straub', 'fantasy', LOAD_FILE('./public/images/fantasy/Time_Tomorrow.jpg') ),
('The Wicked King','Holly','Black', 'fantasy', LOAD_FILE('./public/images/fantasy/Wicked_King.jpg') ),
-- Horror
('The Push','Ashley','Audrain', 'horror', LOAD_FILE('./public/images/horror/Push.jpg') ),
('One By One','Freida','McFadden', 'horror', LOAD_FILE('./public/images/horror/One_by_one.jpg') ),
('Nettle & Bone','T.','Kingfisher', 'horror', LOAD_FILE('./public/images/horror/Nettle_Bone.jpg') ),
('The Last Graduate','Naomi','Novik', 'horror', LOAD_FILE('./public/images/horror/Graduate.jpg') ),
('The Hive','Gregg','Olsen', 'horror', LOAD_FILE('./public/images/horror/Hive.jpg') );

