create database gorilaDB;
use gorilaDB;


create table tb_adm(
	id_adm 					int primary key auto_increment,
    nm_adm		   			varchar(200) not null,
    ds_email       			varchar(100),
    ds_senha       			varchar(50) not null
);

INSERT INTO tb_adm( nm_adm, ds_email, ds_senha)
    VALUES ('Milena', 'admin', '123');

create table tb_usuario(
	id_usuario 				int primary key auto_increment,
    nm_usuario 				varchar(200),
    ds_cpf        			varchar(14),
    ds_telefone				varchar(14),
    nm_apelido				varchar(200)
);	

create table tb_login_usuario(
	id_login_usuario 		int primary key auto_increment,
    id_usuario				int,
    ds_email      	 		varchar(800),
    ds_senha       			varchar(800),
    bt_trocar				boolean,
    cod_reset				varchar(20),
    dt_expiracao_cod		datetime,
    foreign key (id_usuario) references tb_usuario(id_usuario)
);



create table tb_categoria(
	id_categoria			int primary key auto_increment,
    nm_categoria			varchar(200),
    img_categoria			varchar(300),
    ds_descricao			varchar(1000)
);

create table tb_servico(
	id_servico				int primary key auto_increment,
    id_categoria			int,
    nm_servico				varchar(200),
    ds_descricao			varchar(1000),
    nr_valor				decimal(15, 2),
    img_servico				varchar(300),
foreign key (id_categoria)  references tb_categoria(id_categoria)
);



create table tb_pedido(
	id_pedido				int primary key auto_increment,
    id_usuario				int,
    dt_data					varchar(100),
    ds_hora					varchar(100),
    tb_pagamento			varchar(100),
    ds_status				varchar(100),
foreign key (id_usuario) references tb_usuario(id_usuario)
);

create table tb_servico_item(
	id_servico_item			int primary key auto_increment,
    id_pedido				int,
    id_servico				int,
    qtd_itens				int,
    vl_servico				decimal(15,2),
foreign key (id_pedido) 	references tb_pedido(id_pedido),
foreign key (id_servico)    references tb_servico(id_servico)
);

create table tb_pagamento_cartao(
	id_pagamento_cartao		int primary key auto_increment,
    id_pedido				int,
    nm_pessoa				varchar(200),
    nr_cartao				varchar(50),
    cod_seguranca			varchar(50),
    dt_validade				varchar(50),
    foreign key (id_pedido) references tb_pedido(id_pedido)
);

create table tb_pagamento_pix(
	id_pagamento_pix		int primary key auto_increment,
    id_pedido				int,
    cod_pix					varchar(100),
    foreign key (id_pedido) references tb_pedido(id_pedido)
);

create table tb_pagamento_dinheiro(
	id_pagamento_dinheiro	int primary key auto_increment,
    id_pedido				int,
    nr_troco				decimal(15, 2),
    foreign key (id_pedido) references tb_pedido(id_pedido)
);

select id_servico        as id,
            nm_categoria                    as categoria,
            nm_servico                      as sevico,
            nr_valor                        as valor

        from tb_servico
        inner join tb_categoria on tb_servico.id_categoria = tb_categoria.id_categoria

        group 
            by tb_servico.id_servico,
                nm_categoria ,
                nm_servico,
                nr_valor

