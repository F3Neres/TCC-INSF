use gorilaDB;

-- carga inicial funcionário admin
INSERT INTO tb_adm( nm_adm, ds_email, ds_senha)
    VALUES ('Milena', 'gorilla@gmail.com', 'gorillacar123');


-- CSU01 :: efetuar login adm
select  id_adm     id,
        nm_usuario           nome,
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
INSERT INTO tb_categoria (id_categoria, nm_categoria, ds_img, ds_descricao)
     VALUES             (1, 'lavagens', '', 'acabamento padrão em todas as lavagens');


-- CSU05:: cadastrar serviço
INSERT INTO tb_servico (id_servico, id_categoria, nm_servico, ds_img, ds_descricao, nr_valor )
     VALUES             (1, 1, 'lavagem com shampoo neutro e acabamento interno padrão de todas as lavagens', 150);
