INSERT INTO roles(title)
VALUES
("admin"),
("blogger");

INSERT INTO permissions(action)
VALUES
("post"),
("manage-users");

INSERT INTO role_permissions(role_id, permission_id)
VALUES
(1,1),
(1,2),
(2,1);

INSERT INTO users (role_id, email, first_name, last_name)
VALUES
(1, "dalanhabib@gmail.com", "alan", "habib")

INSERT INTO blog_categories (label, description)
VALUES
("React", " Lorem Ipsum has been the industry''s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.")
("Vue", " Lorem Ipsum has been the industry''s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.")
("Angular", " Lorem Ipsum has been the industry''s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.")
("AWS", " Lorem Ipsum has been the industry''s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.")
("Vanilla Script", " Lorem Ipsum has been the industry''s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.")
("Tech Culture", " Lorem Ipsum has been the industry''s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.")

INSERT INTO blog_posts (author_id, title, text, image, active, keyword1, keyword2, bg_src, bg_type)
VALUES
(1,"React", " Lorem Ipsum has been the industry''s standard dummy text ever since the 1500s, when an unknown","fitness-blog-post.jpg", 1, "functional programming", "ES6","memories-from.jpg", "Image")
(1,"Vue", " Lorem Ipsum has been the industry''s standard dummy text ever since the 1500s, when an unknown printe","fitness-blog-post.jpg", 1, "functional programming", "ES6","memories-from.jpg", "Image")
(1,"Angular", " Lorem Ipsum has been the industry''s standard dummy text ever since the 1500s","fitness-blog-post.jpg", 1, "functional programming", "ES6","memories-from.jpg", "Image")
(1,"AWS", " Lorem Ipsum has been the industry''s standard dummy text ever since the 1500s","fitness-blog-post.jpg", 1, "functional programming", "ES6","memories-from.jpg", "Image")
(1,"Vanilla Script", " Lorem Ipsum has been the industry''s standard dummy text ever","fitness-blog-post.jpg", 1, "functional programming", "ES6","memories-from.jpg", "Image")
(1,"Tech Culture", " Lorem Ipsum has been the industry''s standard dummy text ever since the 1500s","fitness-blog-post.jpg", 1, "functional programming", "ES6","memories-from.jpg", "Image")

INSERT INTO blog_post_comments (post_id, author_id, comment)
VALUES
(1,1, "Totally brooo!")
(1,1, "Frigging awesome!")

INSERT INTO blog_post_categories (post_id, category_id)
VALUES
(1,4)
(1,5)
(2,7)
(3,4)
(4,6)
(5,4)
