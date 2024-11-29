-- CreateTable
CREATE TABLE `sys_tenant` (
    `id` BIGINT NOT NULL AUTO_INCREMENT COMMENT 'id',
    `tenant_id` VARCHAR(191) NOT NULL COMMENT '租户编号',
    `tenant_contact_name` VARCHAR(191) NULL COMMENT '联系人',
    `tenant_contact_phone` VARCHAR(191) NULL COMMENT '联系电话',
    `tenant_name` VARCHAR(191) NULL COMMENT '租户名称',
    `tenant_area` VARCHAR(191) NULL COMMENT '租户地区',
    `tenant_address` VARCHAR(191) NULL COMMENT '租户地址',
    `longitude` INTEGER NULL COMMENT '经度',
    `latitude` INTEGER NULL COMMENT '纬度',
    `area_code` VARCHAR(191) NULL COMMENT '地区编码',
    `status` CHAR(1) NULL DEFAULT '0' COMMENT '状态 0正常 1禁用',
    `del_flag` CHAR(1) NOT NULL DEFAULT '0' COMMENT '删除标准 0正常 1删除',
    `create_by` VARCHAR(64) NOT NULL DEFAULT '' COMMENT '创建人',
    `create_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3) COMMENT '创建时间',
    `update_by` VARCHAR(64) NOT NULL DEFAULT '' COMMENT '更新人',
    `update_time` DATETIME(3) NOT NULL COMMENT '更新时间',
    `remark` VARCHAR(191) NULL COMMENT '备注',

    UNIQUE INDEX `sys_tenant_tenant_id_key`(`tenant_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
