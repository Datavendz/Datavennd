import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn, Index } from 'typeorm';
import { User } from '../../users/entities/user.entity';

@Entity('transactions')
@Index(['userId'])
@Index(['status'])
@Index(['createdAt'])
export class Transaction {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('uuid')
    userId: string;

    @ManyToOne(() => User, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'userId' })
    user: User;

    @Column({ type: 'varchar', length: 255 })
    externalId: string;

    @Column({ type: 'decimal', precision: 12, scale: 2 })
    amount: number;

    @Column({ type: 'varchar', length: 50 })
    type: 'payment' | 'refund' | 'subscription' | 'activation';

    @Column({ type: 'varchar', length: 50, default: 'pending' })
    status: 'pending' | 'success' | 'failed' | 'cancelled';

    @Column({ type: 'text', nullable: true })
    failureReason: string;

    @Column({ type: 'jsonb', nullable: true })
    metadata: any;

    @Column({ type: 'jsonb', nullable: true })
    callbackData: any;

    @Column({ type: 'timestamp', nullable: true })
    processedAt: Date;

    @Column({ type: 'boolean', default: false })
    idempotencyProcessed: boolean;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}