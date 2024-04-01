import {Table, Column, DataType, Model, HasMany, ForeignKey, BelongsTo} from 'sequelize-typescript'

@Table({
  timestamps: true,
  tableName: 'tasks',
  modelName: 'Task'
})

export class Task extends Model {
  @ForeignKey(() => User)
  @Column({
    type: DataType.UUID,
    primaryKey: true,
    defaultValue: DataType.UUIDV4
  })
  declare id: string

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  declare title: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  declare description: string;

  @BelongsTo(() => User, 'userId')
  declare user: User
}

@Table({
  timestamps: true,
  tableName: 'completed_tasks',
  modelName: 'CompletedTasks'
})

export class CompletedTasks extends Model {
  @ForeignKey(() => User)
  @Column({
    type: DataType.UUID,
    primaryKey: true,
    defaultValue: DataType.UUIDV4
  })
  declare id: string

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  declare title: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  declare description: string;

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
    primaryKey: true,
    allowNull: false
  })
  declare email: string

  @Column({
    type: DataType.STRING,
    primaryKey: true,
    allowNull: false
  })
  declare password: string

  @HasMany(() => Task, 'userId')
  declare completed_tasks: CompletedTasks[]

  @HasMany(() => Task, 'userId')
  declare tasks: Task[]
}
