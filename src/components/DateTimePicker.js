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

            <Text>Select Time:</Text>
            <Button title="Select Time" onPress={() => setShowTimePicker(true)} />
            {showTimePicker && (
                <DateTimePicker
                    mode="time"
                    value={selectedTime}
                    onChange={handleTimeChange}
                />
            )}

            <Button title="Make Reservation" onPress={/* handleReservation function */} />
        </View>
    );
};

export default ReservationScreen;