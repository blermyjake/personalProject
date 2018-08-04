SELECT DISTINCT name FROM centers JOIN userinfo ON userinfo.userid = centers.userid WHERE userinfo.userid = $1



-- Set up join statement and add that column into user login page to show something...

-- SELECT * FROM centers JOIN userinfo ON userinfo.userid = centers.userid