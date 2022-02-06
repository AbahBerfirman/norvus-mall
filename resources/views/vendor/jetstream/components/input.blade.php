@props(['disabled' => false])

<input {{ $disabled ? 'disabled' : '' }} {!! $attributes->merge(['class' => 'border-gray-300 focus:border-norvus-101 focus:ring focus:ring-norvus-101 focus:ring-opacity-50 rounded-md shadow-sm']) !!}>
