import React, { useEffect, useState, Fragment } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentCategories } from '../../../redux/selectors//admin/adminSelectors';

import MUIDataTable from 'mui-datatables';

import _ from 'lodash';
import { Tooltip, IconButton } from '@material-ui/core';
import CategoryCustomToolbar from '../table/customToolbar/CategoryCustomToolbar';
import CategoryModal from './CategoryModal';

import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

const Categories = ({ categories }) => {
  const [currentCategories, setCurrentCategories] = useState(categories);
  const [category, setCategory] = useState({});
  // const [categoryToDelete, setCategoryToDelete] = useState({});
  const [type, setType] = useState('');
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  useEffect(() => {
    if (!_.isEmpty(categories)) {
      setCurrentCategories(categories);
    }
  }, [categories]);

  const handleClose = () => {
    setShowEditModal(false);
    setShowDeleteModal(false);
  };

  const columns = [
    {
      label: 'Id',
      name: 'id',
    },
    {
      label: 'Name',
      name: 'name',
    },
    {
      label: 'Description',
      name: 'description',
    },
    {
      label: 'Actions',
      name: 'actions',
      options: {
        download: false,
        sort: false,
        filter: false,
        empty: true,
        customBodyRender: (value, tableMeta, updateValue) => {
          return (
            <div
              style={{
                display: 'flex',
                width: '50%',
                margin: '0 auto',
                justifyContent: 'space-evenly',
              }}>
              <Tooltip title='Edit Category' placement='top' arrow>
                <IconButton
                  onClick={() => {
                    const categoryId = tableMeta.rowData[0];
                    const selectedCategory = currentCategories.filter(
                      (category) => category.id === categoryId
                    )[0];

                    setShowEditModal(true);
                    setCategory(selectedCategory);
                    setType('edit');
                  }}>
                  <EditIcon />
                </IconButton>
              </Tooltip>
              {/* DELETE */}
              <Tooltip title='Delete Category' placement='top' arrow>
                <IconButton
                  onClick={() => {
                    const categoryId = tableMeta.rowData[0];
                    const selectedCategory = currentCategories.filter(
                      (category) => category.id === categoryId
                    )[0];

                    setShowDeleteModal(true);
                    setCategory(selectedCategory);
                    setType('delete');
                  }}>
                  <DeleteIcon />
                </IconButton>
              </Tooltip>
            </div>
          );
        },
      },
    },
  ];

  const options = {
    responsive: 'vertical',
    selectableRows: 'multiple',
    rowsPerPage: 20,
    rowsPerPageOptions: [20, 40, 100],
    customToolbar: () => {
      return <CategoryCustomToolbar />;
    },
  };

  return (
    <Fragment>
      {(showEditModal || showDeleteModal) && (
        <CategoryModal
          open={showEditModal || showDeleteModal}
          category={category}
          type={type}
          handleClose={handleClose}
        />
      )}
      <MUIDataTable
        title='Categories'
        columns={columns}
        options={options}
        data={currentCategories}
      />
    </Fragment>
  );
};

const mapStateToProps = createStructuredSelector({
  categories: selectCurrentCategories,
});

export default compose(connect(mapStateToProps))(Categories);
