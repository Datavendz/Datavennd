import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('admins')
export class Admin {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ type: 'varchar', length: 255, unique: true })
    username: string;

    @Column({ type: 'varchar', length: 255 })
    passwordHash: string;

    @Column({ type: 'varchar', length: 255 })
    email: string;

    @Column({ type: 'boolean', default: true })
    passwordChangeRequired: boolean;

    @Column({ type: 'varchar', length: 50, default: 'active' })
    role: 'superadmin' | 'admin' | 'moderator';

    @Column({ type: 'varchar', length: 50, default: 'active' })
    status: 'active' | 'suspended' | 'deleted';

    @Column({ type: 'timestamp', nullable: true })
    lastLogin: Date;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}