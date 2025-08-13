-- Seed data for jewelry marketplace

-- Insert categories
INSERT INTO categories (name, description, icon, sort_order) VALUES
('Rings', 'Wedding rings, engagement rings, and fashion rings', '💍', 1),
('Necklaces', 'Gold chains, pendant necklaces, and statement pieces', '📿', 2),
('Earrings', 'Studs, hoops, drops, and chandelier earrings', '👂', 3),
('Bracelets', 'Tennis bracelets, bangles, and charm bracelets', '⌚', 4),
('Pendants', 'Religious pendants, fashion pendants, and lockets', '🔸', 5),
('Sets', 'Matching jewelry sets for special occasions', '💎', 6);

-- Insert sample products
INSERT INTO products (name, description, price, original_price, category, material, stone, stock_quantity, is_new, rating, review_count, weight, purity, certification) VALUES
('Diamond Solitaire Ring', 'Exquisite diamond solitaire ring crafted in 18K gold with GIA certified diamond', 45000.00, 52000.00, 'Rings', '18K Gold', 'Diamond', 5, true, 4.8, 124, '3.2g', '18K', 'GIA Certified'),
('Pearl Drop Earrings', 'Elegant pearl drop earrings in sterling silver with natural freshwater pearls', 8500.00, 10000.00, 'Earrings', 'Silver', 'Pearl', 12, false, 4.9, 89, '2.1g', '925 Silver', 'Hallmarked'),
('Gold Chain Necklace', 'Classic 22K gold chain necklace perfect for daily wear', 25000.00, 28000.00, 'Necklaces', '22K Gold', 'None', 8, true, 4.7, 156, '8.5g', '22K', 'BIS Hallmarked'),
('Emerald Tennis Bracelet', 'Stunning emerald tennis bracelet set in platinum', 35000.00, 40000.00, 'Bracelets', 'Platinum', 'Emerald', 3, false, 4.6, 67, '12.3g', 'Platinum 950', 'Certified'),
('Ruby Pendant Set', 'Beautiful ruby pendant with matching earrings in 18K gold', 18000.00, 22000.00, 'Sets', '18K Gold', 'Ruby', 6, false, 4.5, 93, '5.7g', '18K', 'Certified'),
('Sapphire Stud Earrings', 'Classic sapphire stud earrings in white gold setting', 12000.00, 15000.00, 'Earrings', 'White Gold', 'Sapphire', 10, true, 4.8, 78, '1.8g', '18K White Gold', 'Certified'),
('Diamond Eternity Band', 'Elegant diamond eternity band with round brilliant diamonds', 55000.00, 62000.00, 'Rings', '18K Gold', 'Diamond', 4, true, 4.9, 145, '4.1g', '18K', 'GIA Certified'),
('Pearl Necklace Set', 'Traditional pearl necklace with matching earrings', 15000.00, 18000.00, 'Sets', 'Silver', 'Pearl', 7, false, 4.4, 112, '15.2g', '925 Silver', 'Hallmarked');

-- Insert product images
INSERT INTO product_images (product_id, image_url, alt_text, is_primary, sort_order) VALUES
(1, '/placeholder.svg?height=400&width=400', 'Diamond Solitaire Ring - Main View', true, 1),
(1, '/placeholder.svg?height=400&width=400', 'Diamond Solitaire Ring - Side View', false, 2),
(2, '/placeholder.svg?height=400&width=400', 'Pearl Drop Earrings - Main View', true, 1),
(3, '/placeholder.svg?height=400&width=400', 'Gold Chain Necklace - Main View', true, 1),
(4, '/placeholder.svg?height=400&width=400', 'Emerald Tennis Bracelet - Main View', true, 1),
(5, '/placeholder.svg?height=400&width=400', 'Ruby Pendant Set - Main View', true, 1),
(6, '/placeholder.svg?height=400&width=400', 'Sapphire Stud Earrings - Main View', true, 1),
(7, '/placeholder.svg?height=400&width=400', 'Diamond Eternity Band - Main View', true, 1),
(8, '/placeholder.svg?height=400&width=400', 'Pearl Necklace Set - Main View', true, 1);

-- Insert sample customers
INSERT INTO customers (first_name, last_name, email, phone) VALUES
('Priya', 'Sharma', 'priya.sharma@example.com', '+91 98765 43210'),
('Rahul', 'Gupta', 'rahul.gupta@example.com', '+91 87654 32109'),
('Anita', 'Patel', 'anita.patel@example.com', '+91 76543 21098'),
('Vikram', 'Singh', 'vikram.singh@example.com', '+91 65432 10987'),
('Meera', 'Reddy', 'meera.reddy@example.com', '+91 54321 09876');

-- Insert sample addresses
INSERT INTO customer_addresses (customer_id, type, first_name, last_name, address_line1, city, state, pincode, phone, is_default) VALUES
(1, 'shipping', 'Priya', 'Sharma', '123 Marine Drive', 'Mumbai', 'Maharashtra', '400001', '+91 98765 43210', true),
(1, 'billing', 'Priya', 'Sharma', '123 Marine Drive', 'Mumbai', 'Maharashtra', '400001', '+91 98765 43210', true),
(2, 'shipping', 'Rahul', 'Gupta', '456 CP Road', 'Delhi', 'Delhi', '110001', '+91 87654 32109', true),
(3, 'shipping', 'Anita', 'Patel', '789 MG Road', 'Bangalore', 'Karnataka', '560001', '+91 76543 21098', true);

-- Insert sample orders
INSERT INTO orders (order_number, customer_id, status, payment_status, payment_method, subtotal, shipping_cost, tax_amount, total_amount, shipping_address_id, billing_address_id) VALUES
('ORD-001', 1, 'delivered', 'paid', 'card', 45000.00, 500.00, 1350.00, 46850.00, 1, 2),
('ORD-002', 2, 'processing', 'paid', 'upi', 33500.00, 500.00, 1005.00, 35005.00, 3, 3),
('ORD-003', 3, 'shipped', 'paid', 'netbanking', 18000.00, 0.00, 540.00, 18540.00, 4, 4);

-- Insert order items
INSERT INTO order_items (order_id, product_id, product_name, product_price, quantity, total_price) VALUES
(1, 1, 'Diamond Solitaire Ring', 45000.00, 1, 45000.00),
(2, 2, 'Pearl Drop Earrings', 8500.00, 2, 17000.00),
(2, 6, 'Sapphire Stud Earrings', 12000.00, 1, 12000.00),
(2, 3, 'Gold Chain Necklace', 25000.00, 1, 25000.00),
(3, 5, 'Ruby Pendant Set', 18000.00, 1, 18000.00);

-- Insert sample reviews
INSERT INTO reviews (product_id, customer_id, order_id, rating, title, comment, is_verified, is_approved) VALUES
(1, 1, 1, 5, 'Absolutely Beautiful!', 'The diamond ring is stunning and exactly as described. The quality is exceptional and the craftsmanship is perfect.', true, true),
(2, 2, 2, 5, 'Elegant and Classy', 'These pearl earrings are so elegant. Perfect for both casual and formal occasions.', true, true),
(5, 3, 3, 4, 'Beautiful Set', 'The ruby pendant set is gorgeous. The color of the rubies is vibrant and the gold work is intricate.', true, true);

-- Insert sample wishlist items
INSERT INTO wishlist (customer_id, product_id) VALUES
(1, 4),
(1, 7),
(2, 1),
(2, 8),
(3, 6);

-- Insert sample cart items
INSERT INTO cart (customer_id, product_id, quantity) VALUES
(4, 3, 1),
(4, 6, 2),
(5, 1, 1),
(5, 5, 1);
