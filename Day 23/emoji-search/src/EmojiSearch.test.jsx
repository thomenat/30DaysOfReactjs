import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import EmojiSearch from './EmojiSearch'
import '@testing-library/jest-dom'

test('renders title and input', () => {
    render(<EmojiSearch />);
    expect(screen.getByText(/emoji search/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Search for an emoji/i)).toBeInTheDocument();
})

test('displays filtered emojis', () => {
    render(<EmojiSearch />);
    const input = screen.getByPlaceholderText(/Search for an emoji/i);
    fireEvent.change(input, { target: { value: 'smile' } });
    expect(screen.getByText(/😊 smile/i)).toBeInTheDocument();
    expect(screen.queryByText(/😂 laugh/i)).not.toBeInTheDocument();
})

