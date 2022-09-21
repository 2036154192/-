import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { hashSync } from "bcryptjs";
import { Exclude } from "class-transformer";

@Entity("user")
export class User {
  //uuid生成唯一id
  @PrimaryGeneratedColumn("uuid")
  id: number;

  //用户名
  @Column({ length: 100 })
  username: string;

  //名称
  @Column({ length: 100, default: "无名称" })
  nickname: string;

  //密码
  @Exclude()
  @Column()
  password: string;

  //头像
  @Column()
  avatar: string;

  //邮箱
  @Column()
  email: string;

  // 用户角色
  @Column("simple-enum", { enum: ["root", "author", "visitor"], default: "visitor" })
  role: string;

  //创建时间
  @Column({
    name: "create_time",
    type: "timestamp",
    default: () => "CURRENT_TIMESTAMP"
  })
  createTime: Date;

  //修改时间
  @Column({
    name: "update_time",
    type: "timestamp",
    default: () => "CURRENT_TIMESTAMP"
  })
  updateTime: Date;

  //密码加密
  //BeforeInsert表示该方法在数据插入之前调用，这样就能保证插入数据库的密码都是加密后的。
  @BeforeInsert()
  async encryptPwd() {
    this.password = await hashSync(this.password);
  }
}
