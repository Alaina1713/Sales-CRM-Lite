import Lead from "../models/Lead.js";

// @desc Get all leads
// @route GET /api/leads
export const getLeads = async (req, res) => {
  const search = req.query.search || "";
  const leads = await Lead.find({
    $or: [
      { name: { $regex: search, $options: "i" } },
      { company: { $regex: search, $options: "i" } },
    ],
  }).populate("assignedTo", "name email");
  res.json(leads);
};

// @desc Get lead by ID
// @route GET /api/leads/:id
export const getLeadById = async (req, res) => {
  const lead = await Lead.findById(req.params.id).populate("assignedTo", "name email");
  if (lead) res.json(lead);
  else res.status(404).json({ message: "Lead not found" });
};

// @desc Create lead
// @route POST /api/leads
export const createLead = async (req, res) => {
  const { name, email, company, status, assignedTo } = req.body;
  const lead = new Lead({ name, email, company, status, assignedTo });
  const createdLead = await lead.save();
  res.status(201).json(createdLead);
};

// @desc Update lead
// @route PUT /api/leads/:id
export const updateLead = async (req, res) => {
  const lead = await Lead.findById(req.params.id);
  if (lead) {
    Object.assign(lead, req.body);
    const updatedLead = await lead.save();
    res.json(updatedLead);
  } else {
    res.status(404).json({ message: "Lead not found" });
  }
};

// @desc Delete lead
// @route DELETE /api/leads/:id
export const deleteLead = async (req, res) => {
  const lead = await Lead.findById(req.params.id);
  if (lead) {
    await lead.remove();
    res.json({ message: "Lead removed" });
  } else {
    res.status(404).json({ message: "Lead not found" });
  }
};
