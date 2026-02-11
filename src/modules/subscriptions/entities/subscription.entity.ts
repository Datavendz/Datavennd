import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Vendor } from '../../vendors/entities/vendor.entity';

@Entity('subscriptions')
export class Subscription {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('uuid')
    vendorId: string;

    @ManyToOne(() => Vendor, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'vendorId' })
    vendor: Vendor;

    @Column({ type: 'varchar', length: 50, default: 'basic' })
    tier: 'basic' | 'premium';

    @Column({ type: 'decimal', precision: 12, scale: 2 })
    amount: number;

    @Column({ type: 'varchar', length: 50, default: 'active' })
    status: 'active' | 'expired' | 'cancelled';

    @Column({ type: 'boolean', default: false })
    cardPaymentEnabled: boolean;

    @Column({ type: 'boolean', default: false })
    bankPaymentEnabled: boolean;

    @Column({ type: 'boolean', default: false })
    paybillEnabled: boolean;

    @Column({ type: 'boolean', default: false })
    advancedAnalytics: boolean;

    @Column({ type: 'boolean', default: false })
    promotionsEnabled: boolean;

    @Column({ type: 'boolean', default: false })
    priorityListing: boolean;

    @Column({ type: 'timestamp' })
    startDate: Date;

    @Column({ type: 'timestamp' })
    expiryDate: Date;

    @Column({ type: 'timestamp', nullable: true })
    renewalReminderSent: Date;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}