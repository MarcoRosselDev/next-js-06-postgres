--
-- PostgreSQL database dump
--

-- Dumped from database version 12.17 (Ubuntu 12.17-1.pgdg22.04+1)
-- Dumped by pg_dump version 12.17 (Ubuntu 12.17-1.pgdg22.04+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

DROP DATABASE number_guess;
--
-- Name: number_guess; Type: DATABASE; Schema: -; Owner: freecodecamp
--

CREATE DATABASE number_guess WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'C.UTF-8' LC_CTYPE = 'C.UTF-8';


ALTER DATABASE number_guess OWNER TO freecodecamp;

\connect number_guess

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: games; Type: TABLE; Schema: public; Owner: freecodecamp
--

CREATE TABLE public.games (
    game_id integer NOT NULL,
    guesses integer NOT NULL,
    u_id integer
);


ALTER TABLE public.games OWNER TO freecodecamp;

--
-- Name: games_game_id_seq; Type: SEQUENCE; Schema: public; Owner: freecodecamp
--

CREATE SEQUENCE public.games_game_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.games_game_id_seq OWNER TO freecodecamp;

--
-- Name: games_game_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: freecodecamp
--

ALTER SEQUENCE public.games_game_id_seq OWNED BY public.games.game_id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: freecodecamp
--

CREATE TABLE public.users (
    u_id integer NOT NULL,
    name character varying(30) NOT NULL
);


ALTER TABLE public.users OWNER TO freecodecamp;

--
-- Name: users_u_id_seq; Type: SEQUENCE; Schema: public; Owner: freecodecamp
--

CREATE SEQUENCE public.users_u_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.users_u_id_seq OWNER TO freecodecamp;

--
-- Name: users_u_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: freecodecamp
--

ALTER SEQUENCE public.users_u_id_seq OWNED BY public.users.u_id;


--
-- Name: games game_id; Type: DEFAULT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.games ALTER COLUMN game_id SET DEFAULT nextval('public.games_game_id_seq'::regclass);


--
-- Name: users u_id; Type: DEFAULT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.users ALTER COLUMN u_id SET DEFAULT nextval('public.users_u_id_seq'::regclass);


--
-- Data for Name: games; Type: TABLE DATA; Schema: public; Owner: freecodecamp
--

INSERT INTO public.games VALUES (1, 417, 1);
INSERT INTO public.games VALUES (2, 831, 1);
INSERT INTO public.games VALUES (3, 461, 2);
INSERT INTO public.games VALUES (4, 36, 2);
INSERT INTO public.games VALUES (5, 433, 1);
INSERT INTO public.games VALUES (6, 530, 1);
INSERT INTO public.games VALUES (7, 228, 1);
INSERT INTO public.games VALUES (8, 666, 3);
INSERT INTO public.games VALUES (9, 275, 3);
INSERT INTO public.games VALUES (10, 475, 4);
INSERT INTO public.games VALUES (11, 810, 4);
INSERT INTO public.games VALUES (12, 540, 3);
INSERT INTO public.games VALUES (13, 349, 3);
INSERT INTO public.games VALUES (14, 835, 3);
INSERT INTO public.games VALUES (15, 316, 5);
INSERT INTO public.games VALUES (16, 379, 5);
INSERT INTO public.games VALUES (17, 15, 6);
INSERT INTO public.games VALUES (18, 236, 6);
INSERT INTO public.games VALUES (19, 150, 5);
INSERT INTO public.games VALUES (20, 161, 5);
INSERT INTO public.games VALUES (21, 338, 5);
INSERT INTO public.games VALUES (22, 7, 7);
INSERT INTO public.games VALUES (23, 938, 8);
INSERT INTO public.games VALUES (24, 669, 8);
INSERT INTO public.games VALUES (25, 233, 9);
INSERT INTO public.games VALUES (26, 784, 9);
INSERT INTO public.games VALUES (27, 537, 8);
INSERT INTO public.games VALUES (28, 177, 8);
INSERT INTO public.games VALUES (29, 326, 8);
INSERT INTO public.games VALUES (30, 577, 10);
INSERT INTO public.games VALUES (31, 883, 10);
INSERT INTO public.games VALUES (32, 920, 11);
INSERT INTO public.games VALUES (33, 69, 11);
INSERT INTO public.games VALUES (34, 199, 10);
INSERT INTO public.games VALUES (35, 243, 10);
INSERT INTO public.games VALUES (36, 984, 10);
INSERT INTO public.games VALUES (37, 726, 12);
INSERT INTO public.games VALUES (38, 618, 12);
INSERT INTO public.games VALUES (39, 366, 13);
INSERT INTO public.games VALUES (40, 663, 13);
INSERT INTO public.games VALUES (41, 139, 12);
INSERT INTO public.games VALUES (42, 83, 12);
INSERT INTO public.games VALUES (43, 768, 12);
INSERT INTO public.games VALUES (44, 720, 14);
INSERT INTO public.games VALUES (45, 160, 14);
INSERT INTO public.games VALUES (46, 517, 15);
INSERT INTO public.games VALUES (47, 55, 15);
INSERT INTO public.games VALUES (48, 248, 14);
INSERT INTO public.games VALUES (49, 54, 14);
INSERT INTO public.games VALUES (50, 719, 14);
INSERT INTO public.games VALUES (51, 90, 16);
INSERT INTO public.games VALUES (52, 953, 16);
INSERT INTO public.games VALUES (53, 319, 17);
INSERT INTO public.games VALUES (54, 977, 17);
INSERT INTO public.games VALUES (55, 334, 16);
INSERT INTO public.games VALUES (56, 78, 16);
INSERT INTO public.games VALUES (57, 184, 16);


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: freecodecamp
--

INSERT INTO public.users VALUES (1, 'user_1750590539441');
INSERT INTO public.users VALUES (2, 'user_1750590539440');
INSERT INTO public.users VALUES (3, 'user_1750590557009');
INSERT INTO public.users VALUES (4, 'user_1750590557008');
INSERT INTO public.users VALUES (5, 'user_1750590685750');
INSERT INTO public.users VALUES (6, 'user_1750590685749');
INSERT INTO public.users VALUES (7, 'marco');
INSERT INTO public.users VALUES (8, 'user_1750590874742');
INSERT INTO public.users VALUES (9, 'user_1750590874741');
INSERT INTO public.users VALUES (10, 'user_1750590927106');
INSERT INTO public.users VALUES (11, 'user_1750590927105');
INSERT INTO public.users VALUES (12, 'user_1750590968002');
INSERT INTO public.users VALUES (13, 'user_1750590968001');
INSERT INTO public.users VALUES (14, 'user_1750591102093');
INSERT INTO public.users VALUES (15, 'user_1750591102092');
INSERT INTO public.users VALUES (16, 'user_1750591136831');
INSERT INTO public.users VALUES (17, 'user_1750591136830');


--
-- Name: games_game_id_seq; Type: SEQUENCE SET; Schema: public; Owner: freecodecamp
--

SELECT pg_catalog.setval('public.games_game_id_seq', 57, true);


--
-- Name: users_u_id_seq; Type: SEQUENCE SET; Schema: public; Owner: freecodecamp
--

SELECT pg_catalog.setval('public.users_u_id_seq', 17, true);


--
-- Name: games games_pkey; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.games
    ADD CONSTRAINT games_pkey PRIMARY KEY (game_id);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (u_id);


--
-- Name: games games_u_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.games
    ADD CONSTRAINT games_u_id_fkey FOREIGN KEY (u_id) REFERENCES public.users(u_id);


--
-- PostgreSQL database dump complete
--

