import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, Index } from 'typeorm';

@Entity('audit_logs')
@Index(['userId'])
@Index(['action'])
@Index(['createdAt'])
export class AuditLog {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ type: 'uuid', nullable: true })
    userId: string;

    @Column({ type: 'varchar', length: 255 })
    action: string;

    @Column({ type: 'varchar', length: 255, nullable: true })
    entityType: string;

    @Column({ type: 'uuid', nullable: true })
    entityId: string;

    @Column({ type: 'jsonb', nullable: true })
    changes: any;

    @Column({ type: 'varchar', length: 50 })
    status: 'success' | 'failure';

    @Column({ type: 'varchar', length: 15, nullable: true })
    ipAddress: string;

    @Column({ type: 'varchar', length: 255, nullable: true })
    userAgent: string;

    @CreateDateColumn()
    createdAt: Date;
}