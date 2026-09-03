import Contact from "../models/Contact.js";

/**
 * @desc    Save a contact form message to MongoDB
 * @route   POST /api/contact
 * @access  Public
 */
export const sendMessage = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // Basic presence validation
    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        message: "All fields (name, email, subject, message) are required.",
      });
    }

    // Create and save the contact document
    const contact = await Contact.create({ name, email, subject, message });

    return res.status(201).json({
      success: true,
      message: "Message sent successfully",
      data: {
        id: contact._id,
        createdAt: contact.createdAt,
      },
    });
  } catch (error) {
    // Mongoose validation errors
    if (error.name === "ValidationError") {
      const messages = Object.values(error.errors).map((e) => e.message);
      return res.status(400).json({
        success: false,
        message: messages.join(", "),
      });
    }

    console.error("❌ Contact form error:", error.message);
    return res.status(500).json({
      success: false,
      message: "Something went wrong. Please try again later.",
    });
  }
};
