use gorilaDB;

-- carga inicial funcionário admin
INSERT INTO tb_adm( nm_adm, ds_email, ds_senha)
    VALUES ('Milena', 'gorilla@gmail.com', 'gorillacar123');


-- CSU01 :: efetuar login 
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
     VALUES             (1, 'felipe', 111.222.333-00, (11) 98888-7777, 'felipe');


