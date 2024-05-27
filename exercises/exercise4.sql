/*
Ejercicio 4: Modelado de bases de datos
Imagina que estás construyendo un sistema de gestión de vídeos. Diseña un modelo de
base de datos que incluya tablas para vídeos, autores, colaboradores, comentarios, reviews
y usuarios. Asegúrate de incluir las claves primarias, las claves foráneas y las restricciones
de integridad necesarias para que el sistema funcione correctamente.
*/

# Extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

# Functions
CREATE OR REPLACE FUNCTION update_updated_at() RETURNS TRIGGER AS $$ BEGIN NEW.updated_at := NOW();
RETURN NEW;
END;
$$ LANGUAGE plpgsql;

# Tables
CREATE TABLE IF NOT EXISTS users (
    id UUID NOT NULL DEFAULT (uuid_generate_v4 ()),
    name VARCHAR(200) NOT NULL,
    email VARCHAR(50) UNIQUE NOT NULL,
    password VARCHAR(150) NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    deleted_at TIMESTAMPTZ,
    PRIMARY KEY (id),
    CONSTRAINT uq_users_email UNIQUE (email)
);

CREATE TABLE IF NOT EXISTS video (
    id UUID NOT NULL DEFAULT (uuid_generate_v4 ()),
    title VARCHAR(100) NOT NULL,
    description VARCHAR(150) NOT NULL,
    uri VARCHAR(150) NOT NULL,
    author_id UUID NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    deleted_at TIMESTAMPTZ,
    PRIMARY KEY (id),
    FOREIGN KEY (author_id) REFERENCES users (id),
    CONSTRAINT uq_video_uri UNIQUE (uri)
);

CREATE TABLE IF NOT EXISTS video_collaborator (
    id UUID NOT NULL DEFAULT (uuid_generate_v4 ()),
    video_id UUID NOT NULL,
    collaborator_id UUID NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    deleted_at TIMESTAMPTZ,
    PRIMARY KEY (id),
    FOREIGN KEY (video_id) REFERENCES video (id),
    FOREIGN KEY (collaborator_id) REFERENCES users (id)
);

CREATE TABLE IF NOT EXISTS comment (
    id UUID NOT NULL DEFAULT (uuid_generate_v4 ()),
    text VARCHAR(150) NOT NULL,
    video_id UUID NOT NULL,
    author_id UUID NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    deleted_at TIMESTAMPTZ,
    PRIMARY KEY (id),
    FOREIGN KEY (video_id) REFERENCES video (id),
    FOREIGN KEY (author_id) REFERENCES users (id)
);

DO
$$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'review_score_enum') THEN
        #Implement different items depending on the rating system
        CREATE TYPE review_score_enum AS ENUM ('like/dislike', '1-5', '...others');
    END IF;
END
$$;

CREATE TABLE IF NOT EXISTS review (
    id UUID NOT NULL DEFAULT (uuid_generate_v4 ()),
    video_id UUID NOT NULL,
    author_id UUID NOT NULL,
    score review_score_enum NOT NULL,
    comment VARCHAR(150),
    created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    deleted_at TIMESTAMPTZ,
    PRIMARY KEY (id),
    FOREIGN KEY (video_id) REFERENCES video (id),
    FOREIGN KEY (author_id) REFERENCES users (id)
);

# Triggers
DO $$ BEGIN IF NOT EXISTS (
    SELECT 1
    FROM pg_trigger
    WHERE tgname = 'updated_at_users_trigger'
) THEN CREATE TRIGGER updated_at_users_trigger BEFORE
    UPDATE ON users FOR EACH ROW EXECUTE FUNCTION update_updated_at();
END IF;
END $$;

DO $$ BEGIN IF NOT EXISTS (
    SELECT 1
    FROM pg_trigger
    WHERE tgname = 'updated_at_video_trigger'
) THEN CREATE TRIGGER updated_at_video_trigger BEFORE
    UPDATE ON video FOR EACH ROW EXECUTE FUNCTION update_updated_at();
END IF;
END $$;

DO $$ BEGIN IF NOT EXISTS (
    SELECT 1
    FROM pg_trigger
    WHERE tgname = 'updated_at_video_collaborator_trigger'
) THEN CREATE TRIGGER updated_at_video_collaborator_trigger BEFORE
    UPDATE ON video_collaborator FOR EACH ROW EXECUTE FUNCTION update_updated_at();
END IF;
END $$;

DO $$ BEGIN IF NOT EXISTS (
    SELECT 1
    FROM pg_trigger
    WHERE tgname = 'updated_at_comment_trigger'
) THEN CREATE TRIGGER updated_at_comment_trigger BEFORE
    UPDATE ON comment FOR EACH ROW EXECUTE FUNCTION update_updated_at();
END IF;
END $$;

DO $$ BEGIN IF NOT EXISTS (
    SELECT 1
    FROM pg_trigger
    WHERE tgname = 'updated_at_review_trigger'
) THEN CREATE TRIGGER updated_at_review_trigger BEFORE
    UPDATE ON review FOR EACH ROW EXECUTE FUNCTION update_updated_at();
END IF;
END $$;