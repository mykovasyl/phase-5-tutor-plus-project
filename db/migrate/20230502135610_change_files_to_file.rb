class ChangeFilesToFile < ActiveRecord::Migration[6.1]
  def change
    rename_column :assignments, :files, :file
  end
end
