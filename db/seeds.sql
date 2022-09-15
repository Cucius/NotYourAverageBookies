
INSERT INTO Books (title, authorFirstName, authorLastName, genre, coverIMG)
VALUES
-- Biographies
('The Happiest Man on Earth','Eddie','Jaku', 'biography', LOAD_FILE('./public/images/biography/Happiest_Man.jpg') ),
("Can't Hurt Me: Master Your Mind and Defy the Odds",'David','Goggins', 'biography', LOAD_FILE('./public/images/biography/Cant_Hurt_Me.jpg') ),
('Revenge: Meghan, Harry and the War between the Windsors','Tom','Bower', 'biography', LOAD_FILE('./public/images/biography/Revenge.jpg') ),
('Rogues: True Stories of Grifters, Killers, Rebels and Crooks','Patrick Radden','Keefe', 'biography', LOAD_FILE('./public/images/biography/Rogues.jpg') ),
('Vanderbilt: The Rise and Fall of an American Dynasty','Anderson','Cooper', 'biography', LOAD_FILE('./public/images/biography/Vanderbilt.jpg') ),
-- Fantasy
('Circe','Madeline','Miller', 'fantasy', LOAD_FILE('./public/images/biography/Circe.jpg') ),
('The Final Gambit','Jennifer Lynn','Barnes', 'fantasy', LOAD_FILE('./public/images/biography/Final_Gambit.jpg') ),
('The Measure','Nikki','Erlick', 'fantasy', LOAD_FILE('./public/images/biography/Measure.jpg') ),
('This Time Tomorrow','Emma','Straub', 'fantasy', LOAD_FILE('./public/images/biography/Time_Tomorrow.jpg') ),
('The Wicked King','Holly','Black', 'fantasy', LOAD_FILE('./public/images/biography/Wicked_King.jpg') );

