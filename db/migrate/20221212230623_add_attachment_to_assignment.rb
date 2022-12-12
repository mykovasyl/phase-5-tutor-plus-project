class AddAttachmentToAssignment < ActiveRecord::Migration[6.1]
  def change
    add_column :assignments, :attachments, :string
  end
end
