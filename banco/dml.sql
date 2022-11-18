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
where   ds_email            = email
  and   ds_senha            =  senha;


-- CSU03:: cadastrar novo cliente
INSERT INTO tb_usuario (id_usuario, nm_usuario, ds_cpf , ds_telefone, nm_apelido)
     VALUES             (1, 'felipe', '111.222.333-00', '11 98888-7777', 'felipe');



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
  FROM tb_categoria;

-- CSU05:: cadastrar serviço
INSERT INTO tb_servico (id_categoria, nm_servico, ds_descricao, nr_valor )
     VALUES             (1, 'lavagem com shampoo neutro, acabamento interno padrão de todas as lavagens', 150);

-- CSU05.1:: alterar imagem servico
UPDATE tb_servico
   SET img_servico          ='/storage/filme/servico.jp'
WHERE id_servico = 1;


-- CSU06:: listar serviços
select id_servico        as id,
            nm_categoria                    as categoria,
            nm_servico                      as servico,
            nr_valor                        as valor

        from tb_servico
        inner join tb_categoria on tb_servico.id_categoria = tb_categoria.id_categoria

        group 
            by tb_produto.id_produto,
                nm_categoria ,
                nm_servico,
                nr_valor;



-- so eu sei
-- drop database gorilaDB;


table tb_adm;

table tb_categoria;

select * from tb_usuario;
select * from tb_login_usuario;

select md5('123');

select id_servico        as id,
            nm_categoria                    as categoria,
            nm_servico                      as servico,
            nr_valor                        as valor

        from tb_servico
        inner join tb_categoria on tb_servico.id_categoria = tb_categoria.id_categoria

        group 
            by tb_servico.id_servico,
                nm_categoria ,
                nm_servico,
                nr_valor;
                
SELECT id_servico        as id,
       nm_categoria      as categoria,
       nm_servico        as servico,
       nr_valor        	 as valor       
FROM tb_servico
INNER JOIN tb_categoria on tb_servico.id_categoria = tb_categoria.id_categoria
WHERE nm_servico        like '%%';

select id_servico						as id,
		nm_categoria                    as produto,
		nm_servico						as servico,
        nr_valor                        as preco,
		bt_destaque                     as destaque,
		id_departamento                 as departamento
        from tb_produto 
       where id_produto = ?;
       
       
       
	SELECT id_servico         as id,
            nm_categoria      as categoria,
            nm_servico        as servico,
            nr_valor          as valor       
        FROM tb_servico
		INNER JOIN tb_categoria on tb_servico.id_categoria = tb_categoria.id_categoria
        WHERE nm_categoria        like '%aaa%';
        
        
	SELECT id_servico         as id,
            nm_categoria      as categoria,
            nm_servico        as servico,
            nr_valor          as valor       
        FROM tb_servico
		INNER JOIN tb_categoria on tb_servico.id_categoria = tb_categoria.id_categoria
        WHERE nr_valor        like '%12%';
        
select tb_usuario.id_usuario		id,
		nm_usuario					nome
	from tb_usuario
    inner join tb_login_usuario on tb_login_usuario.id_usuario = tb_usuario.id_usuario
    where ds_email = 'email.com'
	and ds_senha = md5('123');
    
    
    INSERT INTO tb_usuario (nm_usuario, ds_cpf, ds_telefone, nm_apelido )
                VALUES ("Marina Dias", "123.456.789-01", "(11)91234-1234", "Mari");
                
	INSERT INTO tb_login_usuario (id_usuario, ds_email, ds_senha )
                VALUES (2, "mari@gmail.com", "1234");
                
		
        SELECT id_categoria         as id,
                nm_categoria         as categoria,
                img_categoria		as img
                
          FROM tb_categoria;
          
                  SELECT id_categoria         as id,
                nm_categoria        as categoria,
                img_categoria		as img,
                ds_descricao		as descricao
                
          FROM tb_categoria;
          
          
		SELECT id_servico        				as id,
				id_categoria                    as categoria,
				nm_servico                      as servico,
                img_servico						as img,
                ds_descricao					as descricao,
				nr_valor                        as valor

        FROM tb_servico
        -- INNER join tb_categoria on tb_servico.id_categoria = tb_categoria.id_categoria

        GROUP 
            by tb_servico.id_servico,
                id_categoria ,
                nm_servico,
                img_servico,
                ds_descricao,
                nr_valor;
          
          
