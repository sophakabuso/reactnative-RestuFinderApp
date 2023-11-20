import React, { useState } from 'react';
import { View, Button, Text } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const ReservationScreen = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [selectedTime, setSelectedTime] = useState(new Date());
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [showTimePicker, setShowTimePicker] = useState(false);

    const handleDateChange = (event, selectedDate) => {
        setSelectedDate(selectedDate || selectedDate);
        setShowDatePicker(false);
    };

    const handleTimeChange = (event, selectedTime) => {
        setSelectedTime(selectedTime || selectedTime);
        setShowTimePicker(false);
    };

    const handleReservation = () => {
        // Convert date and time to ISO string
        const dateStr = selectedDate.toISOString();
        const timeStr = selectedTime.toISOString();

        // Send POST request to server
        fetch('https://your-server.com/reservations', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                date: dateStr,
                time: timeStr,
            }),
        })
        .then((response) => response.json())
        .then((data) => {
            console.log('Success:', data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    };

    return (
        <View>
            <Text>Select Date:</Text>
            <Button title="Select Date" onPress={() => setShowDatePicker(true)} />
            {showDatePicker && (
                <DateTimePicker
                    mode="date"
                    value={selectedDate}
                    onChange={handleDateChange}
                />
            )}

            <Text>Selected Date: {selectedDate.toLocaleDateString()}</Text>

            <Text>Select Time:</Text>
            <Button title="Select Time" onPress={() => setShowTimePicker(true)} />
            {showTimePicker && (
                <DateTimePicker
                    mode="time"
                    value={selectedTime}
                    onChange={handleTimeChange}
                />
            )}

            <Text>Selected Time: {selectedTime.toLocaleTimeString()}</Text>

            <Button title="Make Reservation" onPress={handleReservation} />
        </View>
    );
};

export default ReservationScreen;