import contactModel from "./contact.model.js";

export const getContactsCount = async (req, res) => {
  try {
    const count = await contactModel.countDocuments();
    res.status(200).json({ count });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getMessage = async (req, res) => {
  try {
    const contacts = await contactModel.find();
    res.status(200).json(contacts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const sendMessage = async (req, res) => {
  try {
    const contact = await contactModel.create(req.body);
    res.status(201).send(contact);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const deleteMessage = async (req, res) => {
  try {
    const { id } = req.params;
    const message = await contactModel.findByIdAndDelete(id);

    if (!message) {
      res.status(404).json({ message: "Message not found" });
    }

    res.status(200).json({ message: "Message deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
