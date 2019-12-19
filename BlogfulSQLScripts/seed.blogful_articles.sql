

BEGIN;

INSERT INTO blogful_articles
  (title, date_published, content)
VALUES
  ('Random Ass Title', now() - '20 days'::INTERVAL, ' This is some content to seed the databse with.'),
  ('The most thoughtful thing ever!', now() - '2 days'::INTERVAL, 'Thoughtfulness is only thoughtful to selfish people.'), 
  ('I rock and you dont', now() - '20 days'::INTERVAL, 'I am soo much better than everybody else.'), 
  ('Another different Title' , now() - '30 days'::INTERVAL, ' I wish this was as important as I am making it to be.'), 
  ('Just so you know', now() - '10 days'::INTERVAL, 'I have additional instances of self importance.'), 
  ('Tasty!', now() - '1 days'::INTERVAL, 'I wonder about me from time to time. Really I do.'), 
  ('Deaf stinker', now() - '9 days'::INTERVAL, 'More randomness to share.'), 
  ('Swoop Woop', now() - '2 days'::INTERVAL, 'I thought this was weitd and now I know'), 
  ('Dunk Time', now() - '9 days'::INTERVAL, 'I should have found a data generator to handle this'), 
  ('Yup', now() - '6 days'::INTERVAL, 'More random stuff coming at ya for a seeded table'), 
  ('Seed Title galore', now() - '8 days'::INTERVAL, 'Check me out! I am so important'), 
  ('Random', now() - '15 days'::INTERVAL, 'Get this it is random as hell that I want to do this'), 
  ('Ass', now() - '2 days'::INTERVAL, 'Get er done!!!'), 
  ('Title', now() - '3 days'::INTERVAL, 'It should be illegal for some people to have a blog'), 
  ('Randolph', now() - '45 days'::INTERVAL, 'Easy does it!!!!'), 
  ('Tutors that work', now() - '10 days'::INTERVAL, 'I have the happiest baby in the world and I had nothing to do with it.'), 
  ('Better to type with a wireless keyboard', now() - '16 days'::INTERVAL, 'POO POO that sucks for you.'), 
  ('This feels much more comfortable.', now() - '5 days'::INTERVAL, 'I really like this keyboard even though it does feel cheap from time to time'),
  ('Seed Title galore', now() - '8 days'::INTERVAL, 'Check me out! I am so important'), 
  ('Seed', now() - '8 days'::INTERVAL, 'Check me out! I am so important'), 


  COMMIT;  