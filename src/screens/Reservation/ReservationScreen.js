import React, { useState } from 'react';
import { View, Button, Text } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useDispatch } from 'react-redux';
import { setReservation } from '../../redux/actions/actions'; // Import the action creator

const ReservationScreen = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [selectedTime, setSelectedTime] = useState(new Date());
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [showTimePicker, setShowTimePicker] = useState(false);

    const dispatch = useDispatch(); // Get the dispatch function

    const handleDateChange = (event, selectedDate) => {
        setSelectedDate(selectedDate || selectedDate);
        setShowDatePicker(false);
    };

    const handleTimeChange = (event, selectedTime) => {
        setSelectedTime(selectedTime || selectedTime);
        setShowTimePicker(false);
    };

    const handleReservation = () => {
        // Create a reservation object
        const reservation = {
            date: selectedDate.toISOString(),
            time: selectedTime.toISOString(),
        };

        // Dispatch the setReservation action with the reservation object
        dispatch(setReservation(reservation));
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

            <Button title="Make Reservation" onPress={handleReservation} />
        </View>
    );
};

export default ReservationScreen;