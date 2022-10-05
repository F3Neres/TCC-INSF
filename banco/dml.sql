use gorilaDB;

-- carga inicial funcionário admin
INSERT INTO tb_adm( nm_adm, ds_email, ds_senha)
    VALUES ('Milena', 'gorilla@gmail.com', 'gorillacar123');


-- CSU01 :: efetuar login adm
select  id_adm     id,
        nm_adm          nome,
        ds_email             email
from    tb_adm
where   ds_email            = 'gorilla@gmail.com'
  and   ds_senha            =  'gorillacar123';


-- CSU02 :: efetuar login cliente
select  id_login_usuario     id,
        nm_usuario           nome,
        ds_email             email
from    tb_login_usuario
where   ds_email            = email,
  and   ds_senha            =  senha;


-- CSU03:: cadastrar novo cliente
INSERT INTO tb_usuario (id_usuario, nm_usuario, ds_cpf , ds_telefone, nm_apelido)
     VALUES             (1, 'felipe', '111.222.333-00', 11 98888-7777, 'felipe');



-- CSU04:: cadastrar categoria
INSERT INTO tb_categoria ( nm_categoria, ds_descricao)
     VALUES             ('lavagens', 'acabamento padrão em todas as lavagens');

-- CSU04.1:: alterar imagem categoria
UPDATE tb_categoria
   SET img_categoria          ='/storage/filme/categoria.jp'
WHERE id_categoria = 1;

-- CSU04.2:: listar categoria
SELECT id_categoria         as id,
       nm_categoria         as categoria
  FROM tb_categoria

-- CSU05:: cadastrar serviço
INSERT INTO tb_servico (id_categoria, nm_servico, ds_descricao, nr_valor )
     VALUES             (1, 'lavagem com shampoo neutro, acabamento interno padrão de todas as lavagens', 150);

-- CSU05.1:: alterar imagem servico
UPDATE tb_servico
   SET img_servico          ='/storage/filme/servico.jp'
WHERE id_servico = 1;

