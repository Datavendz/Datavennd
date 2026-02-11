import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn, Index } from 'typeorm';
import { User } from '../../users/entities/user.entity';

@Entity('fraud_detections')
@Index(['userId'])
@Index(['flagType'])
@Index(['createdAt'])
export class FraudDetection {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('uuid')
    userId: string;

    @ManyToOne(() => User, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'userId' })
    user: User;

    @Column({ type: 'varchar', length: 50 })
    flagType: 'repeated_failed_payments' | 'ip_anomaly' | 'suspicious_velocity' | 'manual_flag';

    @Column({ type: 'varchar', length: 50, default: 'active' })
    status: 'active' | 'resolved' | 'false_positive';

    @Column({ type: 'decimal', precision: 5, scale: 2 })
    riskScore: number;

    @Column({ type: 'text', nullable: true })
    description: string;

    @Column({ type: 'jsonb', nullable: true })
    metadata: any;

    @Column({ type: 'boolean', default: false })
    accountLocked: boolean;

    @Column({ type: 'timestamp', nullable: true })
    resolvedAt: Date;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}