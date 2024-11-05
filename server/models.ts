import {Table, Column, DataType, Model, ForeignKey, BelongsTo, HasOne, HasMany} from 'sequelize-typescript'

@Table({
  timestamps: true,
  tableName: 'tokens',
  modelName: 'Token'
})

export class Token extends Model {
  @ForeignKey(() => User)
  @Column({
    type: DataType.UUID,
    primaryKey: true,
    defaultValue: DataType.UUIDV4
  })
  declare id: string

  @Column({
    type: DataType.STRING(1024),
    allowNull: false
  })
  declare refreshToken: string

  @BelongsTo(() => User, 'userId')
  declare user: User
}

@Table({
  timestamps: true,
  tableName: 'users',
  modelName: 'User'
})

export class User extends Model {
  @Column({
    type: DataType.UUID,
    primaryKey: true,
    defaultValue: DataType.UUIDV4
  })
  declare id: string

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  declare email: string

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  declare nickname: string

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  declare password: string

  @HasOne(() => Token, 'userId')
  declare token: Token
}

@Table({
  timestamps: true,
  tableName: 'deskColumns',
  modelName: 'DeskColumn'
})

export class DeskColumn extends Model {
  @Column({
    type: DataType.UUID,
    primaryKey: true,
    defaultValue: DataType.UUIDV4
  })
  declare id: string

  @Column({
    type: DataType.STRING,
    defaultValue: "Column"
  })
  declare title: string

  @ForeignKey(() => Desk)
  @Column({
    type: DataType.UUID,
    primaryKey: true,
    defaultValue: DataType.UUIDV4
  })
  declare deskId: string

  @BelongsTo(() => Desk)
  declare desk: Desk;

  @HasMany(() => Card)
  declare card: Card[]
}

@Table({
  timestamps: true,
  tableName: 'cards',
  modelName: 'Card'
})

export class Card extends Model {
  @Column({
    type: DataType.UUID,
    primaryKey: true,
    defaultValue: DataType.UUIDV4
  })
  declare id: string

  @Column({
    type: DataType.STRING,
    defaultValue: "Card"
  })
  declare title: string

  @Column({
    type: DataType.STRING,
  })
  declare description: string

  @ForeignKey(() => DeskColumn)
  @Column({
    type: DataType.UUID,
    primaryKey: true,
    defaultValue: DataType.UUIDV4
  })
  declare columnId: string

  @BelongsTo(() => DeskColumn)
  declare column: string
}

@Table({
  timestamps: true,
  tableName: 'desks',
  modelName: 'Desk'
})

export class Desk extends Model {
  @Column({
    type: DataType.UUID,
    primaryKey: true,
    defaultValue: DataType.UUIDV4
  })
  declare id: string

  @Column({
    type: DataType.STRING,
    primaryKey: true,
    defaultValue: 'Column'
  })
  declare title: string

  @HasMany(() => DeskColumn)
  declare deskColumns: DeskColumn[];
}