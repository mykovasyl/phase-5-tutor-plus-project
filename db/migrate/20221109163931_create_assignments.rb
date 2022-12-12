class CreateAssignments < ActiveRecord::Migration[6.1]
  def change
    create_table :assignments do |t|
      t.string :name
      t.string :subject
      t.string :notes
      t.attachment :file
      t.boolean :completed
      t.references :imageable, polymorphic: true

      t.timestamps
    end
  end
end
