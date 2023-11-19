import React, { useState } from 'react';
import { View, Text, Button, DatePicker, TimePicker } from 'react-native';

const ReservationScreen = () => {
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedTime, setSelectedTime] = useState(null);

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    const handleTimeChange = (time) => {
        setSelectedTime(time);
    };

    const handleReservation = () => {
        // Perform reservation logic here
        console.log('Reservation:', selectedDate, selectedTime);
    };

    return (
        <View>
            <Text>Select Date:</Text>
            <DatePicker value={selectedDate} onChange={handleDateChange} />

            <Text>Select Time:</Text>
            <TimePicker value={selectedTime} onChange={handleTimeChange} />

            <Button title="Make Reservation" onPress={handleReservation} />
        </View>
    );
};

export default ReservationScreen;
