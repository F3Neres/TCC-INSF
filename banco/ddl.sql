create database gorilaDB;
drop database gorilaDB;

create table tb_adm(
	id_adm 					int primary key auto_increment,
    nm_adm		   			varchar(200) not null,
    ds_email       			varchar(100),
    ds_senha       			varchar(50) not null
);

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
    ds_email      	 		varchar(100),
    ds_senha       			varchar(50),
    foreign key (id_usuario) references tb_usuario(id_usuario)
);

create table tb_categoria(
	id_categoria			int primary key auto_increment,
    nm_categoria			varchar(200),
    ds_img					varchar(300),
    ds_descricao			varchar(1000)
);

create table tb_servico(
	id_servico				int primary key auto_increment,
    id_categoria			int,
    nm_servico				varchar(200),
    ds_descricao			varchar(1000),
    nr_valor				decimal(15, 2),
    ds_img					varchar(300),
foreign key (id_categoria)  references tb_categoria(id_categoria)
);

create table tb_servico_item(
	id_servico_item			int primary key auto_increment,
    id_servico				int,
foreign key (id_servico)    references tb_servico(id_servico)
);

create table tb_agenda(
	id_agenda				int primary key auto_increment,
	dt_data					datetime,
    ds_hora					varchar(50)
);

create table tb_pedido(
	id_pedido				int primary key auto_increment,
    id_usuario				int,
    id_servico_item			int,
    id_agenda				int,
    tb_pagamento			varchar(100),
    ds_status				varchar(100),
foreign key (id_usuario) references tb_usuario(id_usuario),
foreign key (id_servico_item) references tb_servico_item(id_servico_item),
foreign key (id_agenda) references tb_agenda(id_agenda)
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