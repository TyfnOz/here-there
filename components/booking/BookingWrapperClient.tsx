'use client';
import dynamic from 'next/dynamic';
import { Skeleton } from '@/components/ui/skeleton';
import { Booking } from '@/utils/types';

const DynamicBookingWrapper = dynamic(
    () => import('@/components/booking/BookingWrapper'),
    {
        ssr: false,
        loading: () => <Skeleton className='h-[200px] w-full' />,
    }
);

type BookingWrapperProps = {
  propertyId: string;
  price: number;
  bookings: Booking[];
};

export default function BookingWrapperClient({ propertyId, price, bookings }: BookingWrapperProps) {
    return <DynamicBookingWrapper  propertyId={propertyId} price={price} bookings={bookings}/>;
  }
