import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { User } from '../../users/entities/user.entity';

@Entity('vendors')
export class Vendor {
    @PrimaryGeneratedColumn('uuid')
    id: string;
    @Column('uuid')
    userId: string;
    @ManyToOne(() => User, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'userId' })
    user: User;
    @Column({ type: 'varchar', length: 255 })
    businessName: string;
    @Column({ type: 'text' })
    description: string;
    @Column({ type: 'varchar', length: 255 })
    natureOfBusiness: string;
    @Column({ type: 'varchar', length: 50, default: 'pending' })
    applicationStatus: 'pending' | 'approved' | 'rejected' | 'need_more_info';
    @Column({ type: 'boolean', default: false })
    activationPaid: boolean;
    @Column({ type: 'boolean', default: true })
    storeEnabled: boolean;
    @Column({ type: 'varchar', length: 50, default: 'mpesa' })
    paymentMethod: 'mpesa' | 'card' | 'bank' | 'paybill';
    @Column({ type: 'decimal', precision: 12, scale: 2, default: 0 })
    totalRevenue: number;
    @Column({ type: 'decimal', precision: 12, scale: 2, default: 0 })
    platformBalance: number;
    @CreateDateColumn()
    createdAt: Date;
    @UpdateDateColumn()
    updatedAt: Date;
}